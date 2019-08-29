<template>
    <div class="recommand">
        <div class="recommand-title">
            热门推销
        </div>
        <div class="recommand-content">
            <ul>
                <router-link 
                    class="recommand-li" 
                    v-for="item of pages" 
                    :key="item.id"
                    tag="li"
                    :to="'/detail/'+item.id"
                >
                    <div class="img-box">
                        <img class="img-content" :src="item.src">
                    </div>
                    <div class="content-box">
                        <p class="content-title">
                            {{item.title}}
                        </p>
                        <P class="content-introduce">
                             {{item.introduce}}
                        </P>
                        <p class="content-price">
                            <span class="content-price-number">￥{{item.price}}</span>
                             起
                        </p>
                    </div>
                </router-link>
            </ul>
            <div class="find-more" v-if="findFlag">
                查看更多商品
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'HomeRecommand',
    data(){
        return{
           
        }
    },
    props:{
        contentList:Array,
    },
    computed:{
        findFlag(){
            return this.contentList.length>4
        },
        pages(){
            const pages = [];
            this.contentList.forEach((element,index) => {
                if(index<4){
                    pages.push(element)
                }
               
            });
            return pages
        }
    }
}
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl';
.recommand
    overflow-y: scroll;
    .recommand-title
        line-height: 0.94rem;
        background: #eee;
        color: #111;
        padding-left: .2rem;
        font-weight: bold;
    .recommand-content
        padding: .2rem 0;
        ul
            .recommand-li
                padding: .2rem;
                border-bottom: 1px solid #eee;
                display :flex;
            .img-box
                display :inline-block;
                .img-content
                    width:2rem;   
            .content-box
                padding-left: .2rem;
                .content-title
                    font-size: .32rem;
                    font-weight: 600;         
                .content-introduce
                    color: #ccc;
                    margin: .2rem 0;
                    width: 4.5rem;
                    ellipsis();
                .content-price
                    .content-price-number
                        display: inline-block;
                        padding: 0 0.1rem 0 0;
                        color: #f60;
                        font-weight: 600;
        .find-more
            line-height :.72rem;
            text-align :center;
            cursor:pointer;
            color:lightblue

</style>

