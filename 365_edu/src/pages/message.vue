<template>
  <div>
    <x-header title="项目留言" :right-options="{showMore: false}"></x-header>
    <group>
      <x-input v-model="name" label-width="80px" title="*联系人" placeholder="请输入您的姓名" placeholder-align="right"></x-input>
      <x-input v-model.number="mobile" label-width="80px" title="*手机" placeholder="请输入您的手机" placeholder-align="right"></x-input>
      <x-input v-model="weixin" label-width="80px" title="微信" placeholder="请输入您的微信" placeholder-align="right"></x-input>
      <x-input v-model="addr" label-width="80px" title="地址" placeholder="请输入您的联系地址" placeholder-align="right"></x-input>
      <popup-picker calcel-text="嘎嘎" title="投资额度" :data="limit_range" v-model="investment_quota"></popup-picker>
    </group>
    <div class="submit" @click="regTest">提交</div>
  </div>
</template>

<script>
import { XHeader, Group, XInput, PopupPicker, Toast } from 'vux'

const limitRange = [['3-5万','5-10万','10-20万','20万以上']]

export default {
  components: {
    XHeader,
    Group,
    XInput,
    PopupPicker,
    Toast
  },
  data () {
    return {
      id: this.$route.query.messageId,
      limit_range: limitRange,
      name: '',
      mobile: '',
      weixin: '',
      addr: '',
      investment_quota: []
    }
  },
  vuerify: {
    name: {
      test: /^[\u4E00-\u9FA5A-Za-z][\u4E00-\u9FA5A-Za-z0-9]+$/,
      message: '联系人填写错误或未填写'
    },
    mobile: {
      test: /^\d{11}$/,
      message: '手机号填写错误或未填写'
    }
  },
  methods: {
    regTest() {
      var $this = this;

      if (!this.$vuerify.check()) { // 手动触发校验所有数据
        this.$vux.toast.text('信息未填写完整', 'middle')
      } else {
        $this.axios({
          method: 'post',
          url: '/365/project/add_comment',
          header: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          data: {
            id: this.id,
            name: this.name,
            mobile: this.mobile,
            weixin: this.weixin,
            addr: this.addr,
            investment_quota: this.investment_quota
          }
        }).then(function () {
          $this.$vux.toast.text('提交成功', 'middle');
        }).catch(function (err) {
          console.log(err);
        });
//        this.axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//        this.axios.post('http://dev.h5.xiaozhangbang.org/365/project/add_comment', {
//          id: $this.id,
//          name: $this.name,
//          mobile: $this.mobile,
//          weixin: $this.weixin,
//          addr: $this.addr,
//          investment_quota: $this.investment_quota
//        })
//          .then(function (response) {
//            console.log(response);
//          })
//          .catch(function (error) {
//            console.log(error);
//          });
      }
    }
  }
}
</script>

<style lang="less">
html, body {
  background: #fff;
  .weui-cells {
    font-size: .32rem;
    margin-top: 15px;
    .weui-cell {
      padding: 15px 15px;
    }
  }
  .weui-cells:before {
    display: none;
  }
  .submit {
    width: 3.2rem;
    height: .7rem;
    background: #359dda;
    border-radius: 5px;
    text-align: center;
    line-height: .7rem;
    color: #fff;
    margin: 220px auto 0;
    font-size: .32rem;
  }
}
</style>
