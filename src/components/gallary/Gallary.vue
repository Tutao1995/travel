<template>
    <div class="gallary" @click="handleGallary">
       <div class="wrapper">
           <swiper :options="swiperOption">
            <swiper-slide v-for="(item,index) in imgs" :key="index">
                <img class="swiper-img" :src="item" >
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
       </div>
    </div>
</template>

<script>
    export default {
        name:'CommonGallary',
        data(){
            return {
                swiperOption:{
                    pagination:{
                        el:'.swiper-pagination',
                        type:'fraction',
                    }, 
                    loop:true,
                    observeParents:true,
                    observer:true,//dom结构发生改变 自动刷新
                },
                
            }
        },
        props:{
            imgs:Array
        },
        methods:{
            handleGallary(){
                this.$emit('handleGallary')
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .gallary
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index :99
        background: #111;
        display :flex;
        flex-direction: column;
        justify-content: center;
        .wrapper >>> .swiper-container 
            overflow :inherit
        .wrapper
            width:100%;
            height:0;
            padding-bottom:100%;
            .swiper-img
                width:100%
            .swiper-pagination
                color:#fff    
                bottom:-330px;
</style>