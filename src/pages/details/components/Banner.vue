<template>
    <div>
        <div class="banner">
            <img src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_710x360_7486df6c.jpg" alt="" class="banner-img" @click="handleImg">
            <div class="banner-info">
                <div class="banner-title">
                    世界五大宫之首，穿越与您近在咫尺
                </div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe634;</span>
                    39
                </div>
            </div>
        </div>
        <common-gallary
            :imgs="imgs"
            @handleGallary="handleGallary" 
            v-show="gallaryShow"
        ></common-gallary>
    </div>
</template>

<script>
import CommonGallary from 'components/gallary/Gallary.vue'
    export default {
        name:'DetailHeader',
        data(){
            return {
                gallaryShow:false,
                imgs:[
                    'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_710x360_7486df6c.jpg',
                    'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_710x360_7486df6c.jpg'
                ]
            }
        },
        components:{
            CommonGallary
        },
        methods:{
            handleGallary(){
                this.gallaryShow = false;
            },
            handleImg(){
                this.gallaryShow = true;
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .banner
        overflow:hidden;
        height:0;
        padding-bottom:55%;
        position:relative
        .banner-img
            width:100%
        .banner-info
            display: flex;
            position: absolute;
            left: 0;
            right: 0;
            bottom: .32rem;
            line-height :.6rem;
            color:#fff;
            padding: 0 .2rem;
            background-image:linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.8)) 
            .banner-title
                flex:1;
                font-size :.32rem;
            .banner-number
                padding:0 .3rem;
                height:.4rem;
                line-height :.4rem;
                border-radius:.06rem;
                background:rgba(0,0,0,.5);
                font-size:.24rem;
                margin-top:.08rem;
                .banner-icon
                    font-size:.24rem;
</style>