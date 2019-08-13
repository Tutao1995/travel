<template>
    <div class="list">
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wraper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wraper">
            <div class="button">北京</div>
          </div>
          <div class="button-wraper">
            <div class="button">北京</div>
          </div>
          <div class="button-wraper">
            <div class="button">北京</div>
          </div>
          <div class="button-wraper">
            <div class="button">北京</div>
          </div>
          <div class="button-wraper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>

        </div>
      </div>
    </div>

</template>

<script>
    export default {
        name: "CityList"
    }
</script>

<style lang="stylus" scoped>
  @import "~styles/variables.styl"
  .area
    .title
      height: .64rem;
      line-height: .64rem;
      padding-left: .2rem;
      background: #ccc;
    .button-list
      display :flex;
      flex-wrap:wrap;
      padding: .1rem .6rem .1rem .1rem;
      .button-wraper
        width: 30%;
        box-sizing : border-box;
        border: 1px solid #ccc;
        text-align: center;
        border-radius: .06rem;
        margin: .1rem;
        .button
          padding: .2rem;
</style>
