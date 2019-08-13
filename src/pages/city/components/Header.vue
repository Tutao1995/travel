
<template>
    <div class="header">
      <router-link to="/">
        <span class="iconfont header-back">&#xe7eb;</span>
      </router-link>
      城市选择
    </div>
</template>

<script>
    export default {
        name: "CityHeader",
        data(){
          return{

          }
        },
    }
</script>

<style lang="stylus" scoped>
  @import "~styles/variables.styl"
  .header
    height :$headerHeight;
    line-height :$headerHeight;
    overflow :hidden;
    text-align :center;
    background :$bgColor;
    color:#fff;
    font-size:.32rem;
    position :relative;
    .header-back
      position :absolute;
      left :0;
      top:0;
      text-align :center;
      color:#fff;
      font-size :.4rem;
      display:inline-block;
      width:.64rem;

</style>
