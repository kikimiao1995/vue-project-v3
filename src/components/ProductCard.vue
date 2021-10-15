<template>
    <div class="col-12 col-md-6 col-lg-4 mb-4">
        <div class="products card">
            <div v-if="productInfo.inventory == 0" class="soldOut">
                <span>今日已銷售完畢</span>
            </div>
            <img :src="productInfo.img" class="card-img-top" alt="item.title">
            <div class="card-body text-start d-flex flex-column justify-content-center align-items-center">
                <h5 class="card-title">{{ productInfo.name}}</h5>
                <div class="price-box d-flex justify-content-center align-items-center">
                    <div><del>${{ productInfo.price }} NTD</del></div>
                    <div class="price fs-5 ms-3 text-red fw-bold">$9999 NTD</div>
                </div>
                <button class="cartbtn mt-2" type="button" @click="addProductsToCart(productInfo)">加入購物車</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "ProductCard",
    components: {
    },
    props: {
        productInfo: Object
    },
    data() {
        return {
            
        }
    },
    methods: {
        // 加入購物車，
        addProductsToCart(productInfo) {
            this.$store.dispatch('cart/addProductsToCart',productInfo);
        },
        // addProductsToCart(item) {
        //     return this.$store.commit({
        //         type:"addProductsToCart",
        //         id:item.id,
        //         name: item.name,
        //         quantity:1,
        //         img: item.img,
        //         price:900,
        //     });
        // },
    },
}
</script>
<style lang="scss">
$primary-color:#2c3e50;
$list-group-bg: yellow;

// 清除BS5的點擊效果
.btn :focus,
.btn-dark:active:focus {  
    box-shadow: none;
}
.products{
    position: relative;
    img{
        // height: 300px;
        object-fit:cover;
        object-position: 50% 50%;
    }
    .category-tag{
        background: #f4ceda;
        color: #b22222;
        font-size: 10px;
        padding: 6px;
    }
}
.soldOut {
    position: absolute;
    width: 100%;
    height: 100%;
    background:rgba(133, 132, 132, 0.5);
    span {
        display: block;
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 20%;
        background: lighten($primary-color,30%);
        color: #fff;
        font-size: 11px;
        letter-spacing: 2px;
        padding: 20px 0px;
    }
}

.cartbtn{
    display: inline-block;
    padding: 10px 15px;
    border-radius: 5px;
    background: #DAC9A6;
    border-style: none;
    color:#fff;
    &:hover{
        background: darken(#DAC9A6,10%);
    }
}

.text-red{
    color: #b22222;
}

// hover效果
// .products:hover,
.list-group-item:hover,
.cartbtn:hover {
    transform: translate(2px, -2px);
}
// 點擊後押回的css效果
// *****-> 在.cartbtn的小果預計是打勾加入購物車的動畫
.list-group-item:active,
.cartbtn:active {
    transform: translate(0px, 0px);
}
.list-group-item:hover,
.products:hover {
    box-shadow: 0 0 10px 1px lighten(grey,25%);
}

</style>