<template>
    <section class="ProductCard">
        <h1> {{ hello }} </h1>
    </section>
</template>
<script>
export default {
    data() {
        return {
            hello:this.$route.params,
        }
    },
}
</script>