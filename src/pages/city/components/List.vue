<template>
  
    <div class="list" ref="wrapper">
      <div>
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
            <div class="button-wraper" v-for="item in hotCities" :key="item.id">
              <div class="button">{{item.name}}</div>
            </div>
          </div>
        </div>
        <div class="area" v-for="(item,key) of cities" :key="key">
          <div class="title border-topbottom">{{key}}</div>
          <div class="item-list">
            <div class="item" v-for="innerItem in item" :key="innerItem.id">{{innerItem.name}}</div>
          </div>
        </div>
      </div>
    </div>

</template>

<script>
import Bscroll from 'better-scroll';
    export default {
        name: "CityList",
        props:{
          hotCities:Array,
          cities:Object
        },
        mounted(){
          this.scroll = new Bscroll(this.$refs.wrapper);
        }
    }
</script>

<style lang="stylus" scoped>
  @import "~styles/variables.styl"
  .list
    overflow:hidden;
    position:absolute;
    top:1.78rem;
    left:0;
    right:0;
    bottom:0;
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
      .item-list
        .item
          padding: .2rem;
          border-bottom: .02rem solid #ccc;
</style>
