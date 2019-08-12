<template>
    <div>
        <home-header :city="city"></home-header>
        <home-swiper :slideList="slideList"></home-swiper>
        <home-icons :iconList="iconList"></home-icons>
        <home-recommand :contentList="contentList"></home-recommand>
    </div>
</template>
<script>
import axios from 'axios'

import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommand from './components/Recommand'



export default {
    name:'home',
    data(){
        return {
            city:'',
            contentList:[],
            iconList:[],
            slideList:[],
            ret:''
        }
    },
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommand,
    },
    methods:{
        getHomeInfo(){
            axios.get('/api/index.json')
            .then( res => {
                this.getHomeInfoSucc(res)
            })
        },
        getHomeInfoSucc(res){
            const data = res.data;
            this.city = data.city;
            this.contentList = data.contentList;
            this.iconList = data.iconList;
            this.slideList = data.slideList;
            this.ret = data.ret;
        }
    },
    mounted(){
        this.getHomeInfo();
    }
}
</script>
<style lang="stylus" scoped>

</style>
