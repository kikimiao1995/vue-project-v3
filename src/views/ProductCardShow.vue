<template>
    <section class="ProductCard">
        <div class="row py-5 p-0 m-0">
            <GoBack />
            <span class=""></span>
            <div class="col-12 col-md-6 p-0">
                <div class="py-5 p-3 pe-md-0">
                    <!-- <img  :src="productInfo.img" :alt="productInfo.name"> -->
                    <div class="product-img" :style="`background-image:url('${ productInfo.img }')`"></div>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="info-box p-5 text-start">
                    <span class="category-badge">{{productInfo.category}}</span>
                    <h1 class="pt-3"> {{productInfo.name}}</h1>
                    <hr>
                    <h5>【 商品內容 】</h5>
                    <p> {{productInfo.description}}</p>
                    <hr>
                    <div class="product-price py-2">
                        <span class="fs-3 ps-2">NT${{productInfo.price}}</span>
                    </div>
                    <div class="text-end">
                        <button class="cartbtn" type="button" @click="addProductsToCart(productInfo)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"/>
                                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import GoBack from '@/components/GoBack.vue';
import { mapState } from 'vuex';
export default {
    components: {
        GoBack
    },
    props: {
        // route路由的params
        productId: {type:Number, required:true}
    },
    data() {
        return {
        }
    },
    methods: {
        addProductsToCart(productInfo) {
            this.$store.dispatch('cart/addProductsToCart',productInfo);
        },
    },
    computed: {
        ...mapState({
            products: (state) => state.products.products,
        }),
        productInfo() {
            return this.products.find(
                product => product.id === this.productId
            )
        }
    },
}
</script>
<style lang="scss">
$color-golden:#ccac00;
.category-badge{
    font-size: 11px;
    letter-spacing: 1px;
    background: lighten(#2c3e50,20%);
    border-radius: 5px;
    color:#fff;
    padding: 6px;
}

.product-img{
    width: 100%;
    height: 350px;
    max-height:100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
}

</style>