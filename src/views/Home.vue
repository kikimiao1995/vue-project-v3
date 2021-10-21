<template>
  <div class="home">
    <HomeBanner />
    <!-- <SwiperDefault/> -->
    <!-- <SwiperBanner /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HomeBanner from '@/components/HomeBanner.vue'
// import SwiperBanner from '@/components/SwiperBanner.vue'
// import SwiperDefault from '@/components/swiper/SwiperDefault.vue'

export default {
  name: 'Home',
  components: {
    HomeBanner,
    // SwiperDefault,
    // SwiperBanner,
    // Swiper
  }
}
</script>
