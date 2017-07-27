<template>
  <div>
    <x-header title="365教育展" :right-options="{showMore: false}"></x-header>
    <swiper :aspect-ratio="1/2" dots-position="center" :auto="true" :loop="true">
      <swiper-item class="swiper-img" v-for="(item, index) in img_list" :key="index">
        <router-link :to="{path: '/detail', query: {detailId: item.id}}">
          <img :src="item.img" :alt="index">
        </router-link>
      </swiper-item>
    </swiper>
    <div class="title">
      <span></span>
      <h2>精选项目</h2>
      <span></span>
    </div>
    <com-list :list_data="list_data"></com-list>
  </div>
</template>

<script>
import { Swiper, SwiperItem, XHeader } from 'vux'
import comList from './../components/common/list'

export default {
  components: {
    XHeader,
    Swiper,
    SwiperItem,
    comList
  },
  data () {
    return {
      img_list: [],
      list_data: []
    }
  },
  mounted () {
    var $this = this;
    this.axios.get('/365/project/get_banner_list')
        .then(function (res) {
//          console.log(res.data.data);
          $this.img_list = res.data.data;
        })
        .catch(function (error) {
          console.log(error);
        });

    this.axios.get('/365/project/get_project_list')
        .then(function (res) {
//          console.log(res);
          $this.list_data = res.data.data;
        })
        .catch(function (error) {
          console.log(error);
        });
  },
  methods: {
    toDetail(){
      this.$router.push({
        path: '/detail'
      })
    }
  }
}
</script>

<style lang="less">
html,body {
  background: #fff;
}
.swiper-img img {
  width: 100%;
  height: 100%;
}

.title {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px 0 20px;
  background: #fff;
  span {
    width: .5rem;
    height: 1px;
    display: inline-block;
    background: #000;
  }
  h2 {
    font-weight: normal;
    font-size: .44rem;
    margin: 0 20px;
    letter-spacing: 4px;
  }
}

</style>
