
<template>
    <swiper :spaceBetween="30" :hashNavigation='{
        "watchState": true
    }' :pagination='{
        "clickable": true
    }' :navigation="true" class="mySwiper">
    <swiper-slide data-hash="slide1">Slide 1</swiper-slide><swiper-slide data-hash="slide2">Slide 2</swiper-slide><swiper-slide data-hash="slide3">Slide 3</swiper-slide><swiper-slide data-hash="slide4">Slide 4</swiper-slide><swiper-slide data-hash="slide5">Slide 5</swiper-slide><swiper-slide data-hash="slide6">Slide 6</swiper-slide><swiper-slide data-hash="slide7">Slide 7</swiper-slide><swiper-slide data-hash="slide8">Slide 8</swiper-slide><swiper-slide data-hash="slide9">Slide 9</swiper-slide>
    </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
// import 'swiper/css';

// import style (>= Swiper 6.x)
import 'swiper/swiper-bundle.css'

import "swiper/css/pagination"
import "swiper/css/navigation"

// import './style.css';


// import Swiper core and required modules
import SwiperCore, {
    Pagination,Navigation
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination,Navigation]);


export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            
            
        };
    },
    methods: {
        
    }
    
}
</script>