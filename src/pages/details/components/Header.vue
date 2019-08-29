<template>
    <div class="header">
        <router-link tag="div" to="/" class="header-abs">
             <span class="iconfont icon-back">&#xe7eb;</span>
        </router-link>
        <div class="fix-header" v-show="fixedShow" :style="opacityStyle">
            <router-link to="/">
                <span class="iconfont header-back">&#xe7eb;</span>
            </router-link>
        </div>
    </div>
</template>

<script>
import CommonGallary from 'components/gallary/Gallary.vue'
    export default {
        name:'DetailHeader',
        data(){
            return {
                fixedShow:false,
                opacityStyle:{
                    opacity:0
                }
            }
        },
        methods:{
            handleScroll(){
                const top = document.documentElement.scrollTop;
                let opacity = top/140 > 1? 1 : top/60;
                if(top>60){
                    this.fixedShow = true;
                    this.opacityStyle = {
                        opacity 
                    }
                }
                else{
                    this.fixedShow = false;
                }
            }
        },
        activated(){
            window.addEventListener('scroll',this.handleScroll)
        },
        deactivated(){
            window.removeEventListener('scroll',this.handleScroll)
        }

       
    }
</script>

<style lang="stylus" scoped>
    @import "~styles/variables.styl"
    .header
        .header-abs
            position:fixed
            top:.2rem;
            left :.2rem;
            width 0.6rem;
            height :.6rem;
            line-height :.6rem;
            text-align :center;
            border-radius:50%;
            background :rgba(0,0,0,.5)
            .icon-back
                font-size :.4rem;
                color:#fff;
        .fix-header
            height :$headerHeight;
            line-height :$headerHeight;
            overflow :hidden;
            text-align :center;
            background :$bgColor;
            color:#fff;
            font-size:.32rem;
            position :fixed;
            width: 100%;
            top: 0;
            .header-back
                position :absolute;
                left :0;
                top:0;
                text-align :center;
                color:#fff;
                font-size :.4rem;
                display:inline-block;
                width:.64rem;


</style>