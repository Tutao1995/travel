<template>
    <div>
        <home-header></home-header>
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


import { mapState,mapActions } from 'vuex'
export default {
    name:'home',
    data(){
        return {
            lastCity:'',
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
    computed:{
        ...mapState(['city'])
    },
    methods:{
        getHomeInfo(){
            axios.get('/api/index.json?city='+this.city)
            .then( res => {
                this.getHomeInfoSucc(res)
            })
        },
        getHomeInfoSucc(res){
            const data = res.data;
            if(!this.city){
                 this.change_city(data.city)
            }
            this.contentList = data.contentList;
            this.iconList = data.iconList;
            this.slideList = data.slideList;
            this.ret = data.ret;
        },
        ...mapActions(['change_city'])
    },
    mounted(){
        this.getHomeInfo();
    },
    activated(){
        if(this.city !== this.lastCity){
            this.getHomeInfo();
            this.lastCity = this.city;
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>
