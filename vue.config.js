module.exports = {
  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        data: `@import "./src/lib/hotcss/px2rem.scss";$designWidth : 750;`
      }
    }
  }
};
