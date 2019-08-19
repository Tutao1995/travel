<template>
    <ul class="list" ref="wrapper"> 
        <li class="item" v-for="(item,key) of cities" :key="key">{{key}}</li>
    </ul>
</template>

<script>
    export default {
        name: "CityAlphabet",
        props:{
            cities:Object
        }
    }
</script>

<style lang="stylus" scoped>
  @import "~styles/variables.styl"
  .list
    position: absolute;
    top: 1.78rem;
    bottom: 0;
    right: 0;
    width: .4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .item
        height :.4rem;
        color:$bgColor;
</style>
