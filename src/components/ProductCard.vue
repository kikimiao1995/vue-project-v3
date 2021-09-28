<template>
<div class="col-12 col-md-6 col-lg-4 mb-4">
    <div class="products card">
        <img :src="item.img" class="card-img-top" alt="...">
        <div class="card-body text-start d-flex flex-column justify-content-center align-items-center">
            <h5 class="card-title">{{ item.title}}</h5>
            <p class="card-text description">{{ item.description }}</p>
            <div class="price-box d-flex justify-content-center align-items-center">
                <div><del>${{ item.price }} NTD</del></div>
                <div class="price fs-5 ms-3 text-red fw-bold">$9999 NTD</div>
            </div>
            <button class="cartbtn mt-2" type="button" @click="addToCart(item)"></button>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name: "ProductCard",
    data() {
        return {
            added: {
                productName: "",
                img:"",
                productPrice:0,
                productId:0,
                quantity:1,
            }
        }
    },
    methods: {
        addToCart(item) {
            this.$store.commit('addToCart',item);
        },
    },
    
}
</script>
<style lang="scss">
.cartbtn{
    display: inline-block;
    padding: 10px 15px;
    border-radius: 5px;
    background: darken(#DAC9A6,10%);
    border-style: none;
    color:#fff;
}
</style>