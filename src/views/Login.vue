<template>
  <div class="login">
    <h1 class="title">欢迎登陆宝洁SFA系统</h1>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {};
  }
};
</script>

<style>
html,
body,
#app {
  height: 100%;
}
</style>

<style lang="scss" scoped>
.title {
  font-size: px2rem(36);
  line-height: px2rem(36);
  text-align: center;
  padding-top: 60px;
  padding-bottom: 46px;
  color: #fff;
}
.login {
  background-color: #2ade69;
  height: 100%;
}
.top-bar {
  font-size: px2rem(16);
  height: px2rem(30);
  width: px2rem(375);
  background-color: #c09;
}
</style>
