<template>
    <div class="icons">
        <swiper>
            <swiper-slide v-for="(page,index) of pages" :key="index">
                <div class="icon" v-for="icon of page" :key='icon.id'>
                    <div class="icon-img">
                        <img class="icon-img-content" :src=icon.src  :alt=icon.alt>
                    </div>
                    <p class="icon-desc">{{icon.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
export default {
    name:'HomeIcons',
    data(){
        return{
            iconList:[
                {src:"http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",alt:"test",desc:"景点景点景点景点景点",id:'001'},
                {src:"http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",alt:"test",desc:"景点",id:'002'},
                {src:"http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",alt:"test",desc:"景点",id:'003'},
                {src:"http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",alt:"test",desc:"景点",id:'004'},
                {src:"http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",alt:"test",desc:"景点",id:'005'},
                {src:"http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",alt:"test",desc:"景点",id:'006'},
                {src:"http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",alt:"test",desc:"景点",id:'007'},
                {src:"http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",alt:"test",desc:"景点",id:'008'},
                {src:"http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",alt:"test",desc:"景点",id:'009'},
            ]
        }
    },
    computed:{
        pages(){
            const pages = [];
            this.iconList.forEach((item,index) => {
                const page = Math.floor(index/8);
                if(!pages[page]){
                    pages[page] = []
                }
                pages[page].push(item);
            })
             return pages

        }
    }
}
</script>
<style lang="stylus" scoped>
@import '~styles/variables.styl';
@import '~styles/mixins.styl';

    .icons >>> .swipper-container
        height:0;
        overflow:hidden;
        padding-bottom:50%;
    .icon
        width:25%;
        height :0;
        padding-bottom:25%;
        float:left;
        position:relative;
        .icon-img
            position: absolute;
            top: 0;
            bottom: 0.44rem;
            left: 0;
            width: 100%;
            text-align:center
            .icon-img-content
                height :100%;
                margin :0 auto
        .icon-desc
            position :absolute;
            bottom 0;
            height :.44rem;
            line-height :.44rem;
            text-align :center;
            width: 100%;
            color:$darkTextColor;
            ellipsis();
</style>
