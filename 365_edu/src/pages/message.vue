<template>
  <div>
    <x-header title="项目留言" :left-options="{showBack: false}" :right-options="{showMore: false}"></x-header>
    <group>
      <x-input v-model="name" label-width="1.6rem" title="*联系人" placeholder="请输入您的姓名" placeholder-align="right"></x-input>
      <x-input v-model.number="mobile" label-width="1.6rem" title="*手机" placeholder="请输入您的手机" placeholder-align="right"></x-input>
      <x-input v-model="weixin" label-width="1.6rem" title="微信" placeholder="请输入您的微信" placeholder-align="right"></x-input>
      <x-input v-model="addr" label-width="1.6rem" title="地址" placeholder="请输入您的联系地址" placeholder-align="right"></x-input>
      <popup-picker title="投资额度" :data="limit_range" :columns="1" v-model="invest"></popup-picker>
    </group>
    <div class="submit" @click="regTest">提交</div>
  </div>
</template>

<script>
import { XHeader, Group, XInput, PopupPicker, Toast } from 'vux'

//const limitRange = [['3-5万','5-10万','10-20万','20万以上']]
const limitRange = [
  {
    name: '3-5万',
    value: '3-5万',
    parent: 0,
    id: 1
  },
  {
    name: '5-10万',
    value: '5-10万',
    parent: 0,
    id: 2
  },
  {
    name: '10-20万',
    value: '10-20万',
    parent: 0,
    id: 3
  },
  {
    name: '20万以上',
    value: '20万以上',
    parent: 0,
    id: 4
  }
]


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
      invest: [],
      investment_quota: 0
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
//        $this.axios({
//          method: 'post',
//          url: '/365/project/add_comment',
//          header: {
//            'Content-Type': 'application/x-www-form-urlencoded'
//          },
//          params: {
//            id: this.id,
//            name: this.name,
//            mobile: this.mobile,
//            weixin: this.weixin,
//            addr: this.addr,
//            investment_quota: this.investment_quota
//          }
//        }).then(function () {
//          $this.$vux.toast.text('提交成功', 'middle');
//        }).catch(function (err) {
//          console.log(err);
//        });
//        this.axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
        for (let i in this.limit_range) {
          if(this.limit_range[i].name == this.invest[0]) {
            this.investment_quota = this.limit_range[i].id;
            break;
          }
        }
//        console.log(this.investment_quota);
        var params = new URLSearchParams();
        params.append('id', $this.id);
        params.append('name', $this.name);
        params.append('mobile', $this.mobile);
        params.append('weixin', $this.weixin);
        params.append('addr', $this.addr);
        params.append('investment_quota', $this.investment_quota);
        this.axios.post('/365/project/add_comment', params)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
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
    width: 5rem;
    height: 1rem;
    background: #359dda;
    border-radius: 5px;
    text-align: center;
    line-height: 1rem;
    color: #fff;
    margin: 3rem auto 0;
    font-size: .36rem;
  }
}
</style>
