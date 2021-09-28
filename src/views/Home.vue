<template>
  <div class="home">
    <!-- <SwiperBanner /> -->
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// import SwiperBanner from '@/components/SwiperBanner.vue'
// import Swiper from '@/components/Swiper.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    // SwiperBanner,
    // Swiper
  }
}
</script>
