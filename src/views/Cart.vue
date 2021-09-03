<template>
    <div>{{ cart }}</div>
</template>
<script>
export default {
    name:"Cart",
    computed: {
        cart(){
            return this.$store.state.cart;
        }
    }
}
</script>
<style lang="scss" scoped>

</style>