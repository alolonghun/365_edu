<template>
  <div>
    <sticky>
      <x-header :title="detail_data.name" :right-options="{showMore: false}"></x-header>
    </sticky>
    <swiper :aspect-ratio="1/2" dots-position="center" :auto="true" :loop="true">
      <swiper-item class="swiper-img" v-for="(item, index) in banner_list" :key="index">
        <img :src="item" :alt="index">
      </swiper-item>
    </swiper>
    <div class="content content_1">
      <h3 @click="showInfo">项目详情</h3>
      <p v-html="detail_data.intro"></p>
    </div>
    <div class="content content_2">
      <h3>项目详情介绍</h3>
      <img v-for="item in detail_data.content_img" :src="item" alt="">
      <p v-html="detail_data.eintro"></p>
    </div>
    <div class="content content_3">
      <h3>合作流程</h3>
      <p v-html="detail_data.cp"></p>
    </div>
    <router-link :to="{path: '/message', query: {messageId: id}}">
      <div class="message">
        <span>留言咨询</span>
        <img src="../images/icon/message.png" alt="">
      </div>
    </router-link>
  </div>
</template>

<script>
import { XHeader, Swiper, SwiperItem, Sticky } from 'vux'

export default {
  components: {
    XHeader,
    Swiper,
    SwiperItem,
    Sticky
  },
  data () {
    return {
      banner_list: [],
      detail_data: [],
      id: this.$route.query.detailId
    }
  },
  mounted() {
    var $this = this;
    this.axios.get('/365/project/show_detail_project?id='+$this.id)
      .then(function (res) {
        console.log(res);
        $this.banner_list = res.data.data.banner;
        $this.detail_data = res.data.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  methods: {
    showInfo() {
      console.log(this.id);
    }
  }
}
</script>

<style lang="less">
body {
  background-color: #f7f7f7;
}

.swiper-img img {
  width: 100%;
  height: 100%;
}

.content {
  display: flex;
  flex-direction: column;
  padding: 10px 12px 30px;
  background-color: #fff;
  &.content_2 {
    margin-top: 15px;
  }
  &.content_3 {
    margin-top: 15px;
  }
  img {
    width: 98%;
    margin: 10px auto;
  }
  h3 {
    font-weight: normal;
    font-size: .32rem;
    line-height: .72rem;
    padding-left: 10px;
  }
  p {
    font-size: .26rem;
    color: #929292;
    padding: 0 5px;
  }
}
.message {
  width: 100%;
  height: 1.2rem;
  background: #359dda;
  text-align: center;
  line-height: 1.2rem;
  color: #fff;
  font-size: .36rem;
  img {
    width: .36rem;
    height: .32rem;
  }
}
</style>
