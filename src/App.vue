<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import './styles/reset.css';
@import './styles/_reset.less';

body {
  font-family: '微软雅黑';
  font-size: .32rem;
}
</style>
