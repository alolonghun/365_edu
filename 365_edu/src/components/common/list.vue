<template>
  <div>
    <router-link v-for="(item, index) in list_data" :key="index" :to="{path: '/detail', query: {detailId: item.id}}" tag="p">
      <group class="list">
        <cell-box is-link>
          <div class="list-wrap">
            <img class="list-img" :src="item.img">
            <div class="list-content">
              <h3>{{ item.name }}</h3>
              <p class="content-font" v-html="item.intro"></p>
              <div class="view-and-comment">
                <div class="view">
                  <img class="icon-view" src="../../images/icon/view.png">
                  <span>{{ item.click_nums | convert }}</span>
                </div>
                <div class="comment">
                  <img class="icon-comment" src="../../images/icon/comment.png">
                  <span>{{ item.comment_nums | convert }}</span>
                </div>
              </div>
            </div>
          </div>
        </cell-box>
      </group>
    </router-link>
  </div>
</template>

<script>
import { Divider, Group, CellBox } from 'vux'

export default {
  components: {
    Divider,
    Group,
    CellBox
  },
  data () {
    return {

    }
  },
  props: [
    'list_data'
  ],
  filter: {

  }
}
</script>

<style lang="less">

.list {
  margin-top: -20px;
  .weui-cells:before {
    display: block;
  }
  .list-wrap {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-right: 15px;
    .list-img {
      width: 80px;
      height: 80px;
      margin-right: 15px;
    }
    .list-content {
      display: flex;
      flex-direction: column;
      h3 {
        font-weight: 400;
        font-size: 18px;
      }
      .content-font {
        font-size: 14px;
        line-height: 20px;
        color: #999;
      }
      .view-and-comment {
        display: flex;
        flex-direction: row;
        color: #999;
        .view, .comment {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          font-size: 16px;
          margin-right: 15px;
        }
        .icon-view, .icon-comment {
          width: 20px;
          height: 20px;
          margin-right: 4px;
        }
      }
    }
  }
}

</style>
