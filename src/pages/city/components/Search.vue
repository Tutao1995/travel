<template>
    <div class="search">
      <input type="text" placeholder="请输入城市或拼音" class="input-content">
    </div>
</template>

<script>
    export default {
        name: "CitySearch"
    }
</script>

<style lang="stylus" scoped>
  @import "~styles/variables.styl"
  .search
    height :.72rem;
    line-height :.72rem;
    text-align :center;
    background :$bgColor;
    padding:.1rem;
    .input-content
      width:100%;
      box-sizing :border-box;
      padding:0 .1rem;
      color:#666;
      text-align :center;
      height: .64rem;

</style>
