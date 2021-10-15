<template>
    <section class="ProductCard">
        <h1> {{ productId }} </h1>
    </section>
</template>
<script>
export default {
    props: {
        productId: {type:Number, required:true}
    },
    data() {
        return {
            
        }
    },
}
</script>