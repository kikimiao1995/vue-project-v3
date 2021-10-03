<template>
  <div class="home">
    <SwiperDefault/>
    <!-- <SwiperBanner /> -->
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// import SwiperBanner from '@/components/SwiperBanner.vue'
import SwiperDefault from '@/components/swiper/SwiperDefault.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    SwiperDefault,
    // SwiperBanner,
    // Swiper
  }
}
</script>
