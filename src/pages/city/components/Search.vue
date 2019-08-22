<template>
<div>
  <div class="search">
      <input  
        type="text" 
        placeholder="请输入城市或拼音" 
        class="input-content"
        v-model="keyword"
      >
    </div>
    <div class="search-content" v-show="keyword.length>0" ref='list'>
      <ul>
        <li v-for="item in list" :key="item.id" class="li-item boder-bottom">{{item.name}}</li>
        <li class="li-item" v-show="hasNoData">没有内容</li>
      </ul>
    </div>
</div>
    
</template>

<script>
import BScroll from 'better-scroll'
    export default {
        name: "CitySearch",
        props:{
          cities:Object
        },
        data(){
          return{
            keyword:'',
            list:[],
            timer:null,
          }
        },
        computed:{
          hasNoData(){
            return !this.list.length
          }
        },
        watch:{
          keyword(){
              const list =[];
              if(this.timer){
                clearTimeout(this.timer)
              };
              if(!this.keyword){
                this.list = [];
                return
              }
              this.timer = setTimeout(() => {
                for(let i in this.cities){
                  this.cities[i].forEach((item,index) => {
                      if(item.name.indexOf(this.keyword) > -1 || item.spell.indexOf(this.keyword) > -1){
                        list.push(item)
                      }
                  });
                }
                this.list = list;
              }, 100);
          }
        },
        mounted(){
          this.scroll = new BScroll(this.$refs.list)
        }
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
      padding:0.1rem;
      color:#666;
      text-align :center;
      height: .64rem;
  .search-content
    position:absolute;
    top:1.7rem;
    z-index:1;
    left:0;
    right:0;
    bottom:0;
    background: #ccc;
    overflow :hidden;
    .li-item
      background: #fdfafa;
      line-height: .32rem;
      height: .32rem;
      padding: .2rem;
      border-bottom: 1px solid #111;
</style>
