<template>
    <div class="swiper">
        <swiper :options="swiperOption" v-if="slideList.length">
            <swiper-slide v-for="slide of slideList" :key='slide.id'>
                <img class="swiper-img" :src="slide.src"  :alt="slide.alt">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
        
</template>
<script>
export default {
    name:'HomeSwiper',
    data(){
        return{
            swiperOption:{
                pagination:{
                    el:'.swiper-pagination'
                },
                loop:true
            },
           
        }
    },
    props:{
        slideList:Array,
    }
}
</script>
<style lang="stylus" scoped>
.swiper >>> .swiper-pagination-bullet-active
    background :#fff;
.swiper
    width:100%;
    height 0;
    overflow:hidden;
    padding-bottom:31.25%;
    background:#eee;
    .swiper-img
        width:100%;
    .swiper-pagination
        bottom:.6rem;
</style>
