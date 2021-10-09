<template>
    <!-- Slider main container -->
    <div class="swiper">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
            <!-- Slides -->
            <div class="swiper-slide">Slide 1</div>
            <div class="swiper-slide">Slide 2</div>
            <div class="swiper-slide">Slide 3</div>
            ...
        </div>
        <!-- If we need pagination -->
        <div class="swiper-pagination"></div>

        <!-- If we need navigation buttons -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>

        <!-- If we need scrollbar -->
        <div class="swiper-scrollbar"></div>
    </div>
</template>
<script>
// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default {
    name:"SwiperText",
    methods: {
        initSwiper() {
            const swiper = new Swiper('.swiper', {
                modules: [Navigation, Pagination],
                // Optional parameters
                direction: 'vertical',
                loop: true,
                // If we need pagination
                pagination: {
                    el: '.swiper-pagination',
                },
                // Navigation arrows
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                // And if we need scrollbar
                scrollbar: {
                    el: '.swiper-scrollbar',
                },
            });
        }
    },
    mounted() {
        this.initSwiper();
    },
};
</script>
<style lang="scss" scoped>
.swiper {
    width: 600px;
    height: 300px;
}
// html, body {
//     position: relative;
//     height: 100%;
//     background: #eee;
//     width: 100%;
//     height: 100%;
// }
// .swiper-container {
//     width: 600px;
//     height: 300px;
// }
// .swiper {
//     width: 100%;
//     height: 100%;
// }
// .swiper-slide {
//     text-align: center;
//     background: #fff;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     &.page1{ background-color: #f0e4d4; }
//     &.page2{ background-color: #f9d9ca; }
//     &.page3{ background-color: #bdc2bb; }
//     &.page4{ background-color: #d2d5b8; }
// }
</style>