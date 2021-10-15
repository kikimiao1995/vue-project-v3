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
</style>