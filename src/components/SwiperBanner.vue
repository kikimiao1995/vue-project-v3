<template>
        <swiper
        :slides-per-view="3"
        :space-between="50"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        >
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
    </swiper>
</template>
<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'

// import style (>= Swiper 6.x)
import 'swiper/swiper-bundle.css'

export default {
    name:"SwiperBanner",
    components: {
        Swiper,
        SwiperSlide,
    },
    directives: {
        swiper: directive
    }
    
}
</script>
<style lang="scss"  scoped>
    
</style>