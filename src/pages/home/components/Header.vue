<template>
    <div class="header">
        <div class="header-left">
            <span class="iconfont icon-back">&#xe7eb;</span>
        </div> 
        <div class="header-input">
            <span class="iconfont">&#xe8ef;</span>
            输入城市/景点/游玩城市
        </div>
        <div class="header-right">
            {{city}}
            <span class="iconfont icon-arrow">&#xe8ec;</span>
        </div>
    </div>
</template>
<script>
export default {
    name:'HomeHeader',
    data(){
        return {

        }
    },
    props:{
        city:String,
    }
}
</script>
<style lang="stylus" scoped>
    @import '~styles/variables.styl';
    .header
        line-height : .86rem;
        display : flex;
        background: $bgColor;
        color:#fff;
        .header-left
            width:.64rem;
            float:left;
            text-align: center;
            .icon-back
                font-size:.4rem;
        .header-input
            flex:1;
            background:#fff;
            color:#111;
            border-radius: .1rem;
            height:.64rem;
            line-height .64rem;
            margin:.12rem .2rem;   
            color:#ddd;
            padding-left:.2rem;
        .header-right
            width 1.28rem;
            float:right;
            text-align: center;
            .arrow
                font-size: .24rem;


</style>
