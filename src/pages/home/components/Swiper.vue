<template>
    <div class="swiper">
        <swiper :options="swiperOption" >
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
            slideList:[
                {   
                    id:'001',
                    src:'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/790fd1eacc298e09ae78025a03ab1c18.jpg_890x330_b2c44acb.jpg',
                    alt:'上海杰尼斯'
                },
                {
                    id:'002',
                    src:'https://imgs.qunarzz.com/piao/fusion/1803/f2/928a8ff6148e5802.png_890x330_4c2f220f.png',
                    alt:'北京石林'
                },
            ]
        }
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
