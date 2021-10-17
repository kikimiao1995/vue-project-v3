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
            </div>
            <div class="card-bottom d-flex justify-content-center align-items-center justify-content-around mt-2">
                <router-link 
                    :to="{name:'ProductCard.show',
                        params:{productId:productInfo.id}}">查看更多</router-link>
                <button class="cartbtn" type="button" @click="addProductsToCart(productInfo)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"/>
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                    </svg>
                </button>
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
        // productInfo: Object
        productInfo: { type:Object, required:true,}
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
        padding: 25px 0px;
    }
}

.card-bottom {
    border-top: 1px solid lighten(grey,35%);
    padding: 9px 0px;
    a {
        display: block;
        text-decoration: none;
        color:#2c3e50;
        font-size: 13px;
        
    }
}

.cartbtn{
    display: inline-block;
    padding: 10px 11px;
    border-style: none;
    border-radius: 5px;
    border-radius: 20px;
    color: $primary-color;
    // &:hover{
    //     background: darken(#DAC9A6,10%);
    // }
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