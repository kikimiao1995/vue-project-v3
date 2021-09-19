<template>
  <Nav />
  <NavList />
  <Footer />
</template>
<script>
import Nav from "@/components/Nav.vue";
import NavList from "@/components/NavList.vue";
import Footer from "@/components/Footer.vue";
export default {
  name:"App",
  components:{
    Nav,
    NavList,
    Footer,
  }
}
</script>
<style lang="scss">
@import "@/assets/scss/all";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
