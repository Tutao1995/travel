<template>
    <ul class="list" ref="wrapper"> 
        <li 
            class="item" 
            v-for="item of letters" 
            :key="item"
            :ref='item'
            @click="handleClick"
            @touchstart="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"

        >{{item}}</li>
    </ul>
</template>

<script>
    export default {
        name: "CityAlphabet",
        props:{
            cities:Object
        },
        data(){
            return {
                touchStatus:false,
                startY:0,
                timer:null
            }
        },
        updated(){
            this.startY = this.$refs['A'][0].offsetTop
        },
        computed:{
            letters(){
                let letterArr = [];
                for(let i in this.cities){
                    letterArr.push(i)
                }
                return letterArr;
            }
        },
        methods:{
            handleClick(e){
                this.$emit('change',e.target.innerText)
            },
            handleTouchStart(){
                this.touchStatus = true;
            },
            handleTouchMove(e){
                if(this.touchStatus){
                    if(this.timer){
                        clearTimeout(this.timer)
                    }
                    this.timer = setTimeout(() => {
                        const touchY = e.touches[0].clientY - 90;
                        const index = Math.floor((touchY - this.startY)/20);
                        if(index >= 0  && index < this.letters.length){
                            this.$emit('change',this.letters[index]) 
                        }  
                    },16)
                }
            },
            handleTouchEnd(){
                this.touchStatus = false;

            }
        }
    }
</script>

<style lang="stylus" scoped>
  @import "~styles/variables.styl"
  .list
    position: absolute;
    top: 1.78rem;
    bottom: 0;
    right: 0;
    width: .4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .item
        height :.4rem;
        color:$bgColor;
</style>
