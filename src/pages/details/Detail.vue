<template>
    <div>
        <detail-banner></detail-banner>
        <detail-header></detail-header>
        <div class="content">

        </div>
    </div>
</template>

<script>
import DetailHeader from './components/Header'
import DetailBanner from './components/Banner'

    export default {
        name:'Detail',
        components:{
            DetailHeader,
            DetailBanner
        }
    }
</script>

<style lang="stylus" scoped>
    .content
        height :30rem;
</style>