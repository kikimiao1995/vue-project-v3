<template>
    <div class="container my-5">
        <div class="row">
            <div class="productList col-12 col-md-3 mb-sm-5">
                <div class="list-group">
                    <a href="#" class="list-group-item">
                        所有商品 🗳
                        <span class="badge bg-primary rounded-pill text-end">14</span>
                    </a>
                    <a href="#" class="list-group-item">訂製蛋糕 🎂</a>
                    <a href="#" class="list-group-item">杯子蛋糕 🍵</a>
                    <a href="#" class="list-group-item">精緻小點</a>
                    <a href="#" class="list-group-item">經典馬卡龍</a>
                    <a href="#" class="list-group-item">下午茶必備</a>
                </div>
            </div>
            <div class="col-12 col-md-8">
                <div class="row">
                    <div class="col-10 col-md-6 col-lg-4"
                        v-for= "item in products" :key="item.ProductId">
                        <div class="card products">
                            <img :src="item.ProductImg" class="card-img-top" alt="...">
                            <div class="card-body text-start">
                                <h5 class="card-title d-flex justify-content-between align-items-baseline">{{ item.ProductTitle}}
                                    <span class="category-tag rounded-pill">{{ item.ProductCategory }}</span>
                                </h5>
                                <p class="card-text description">{{ item.ProductDescription }}</p>
                                <div class="price-box">
                                    <del>NT$1000</del>
                                    <div class="price">NT$9999</div>
                                </div>
                                <button class="cartbtn" type="button"
                                    @click="getProduct(item)">加入購物車</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-10 col-md-6 col-lg-4">
                        <div class="card products">
                            <img src="../assets/images/cupcake2001.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-10 col-md-6 col-lg-4">
                        <div class="card">
                            <img src="https://picsum.photos/g/300/300" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
<!-- <div class="card">
                    <img src="https://picsum.photos/g/300/300" alt="...">
                    <p class="Product-category-tag">生日蛋糕</p>
                    <h4 class="Product-title">幸運加倍蛋糕</h4>
                    <p class="Product-description"></p>
                    <div class="price-box">
                        <del>NT$1000</del>
                    </div>
                    <button type="button">加入購物車</button>
                </div> -->
</template>
<script>
import products from '../assets/product.js'
export default {
    name:"Category",
    data(){
        return {
            products:products,
        }
    },
    methods: {
        getProduct(item){
            let index = item.ProductId;
            console.log(index);
        },
    },
}
</script>
<style lang="scss">
$list-group-color:#2c3e50;
$list-group-bg: yellow;
$bg:#f4ceda;
.products{
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
    .cartbtn{
        padding: 10px 15px;
        border-radius: 5px;
        background: #c34F5A;
        border-style: none;
        color:#fff;
    }
}
</style>