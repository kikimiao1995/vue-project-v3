<template>
    <div class="p-outer bg-lightgrey">
        <div class="container">
            <div class="row">
                <div class="productList col-12 col-md-3 mb-sm-5">
                    <div class="list-group list-group">
                        <a href="#" class="list-group-item">
                            所有商品 🗳
                            <span class="badge bg-primary rounded-pill text-end">14</span>
                        </a>
                        <a href="#" class="list-group-item mb-3">訂製蛋糕 🎂</a>
                        <a href="#" class="list-group-item" @click="getCupcake()">杯子蛋糕 🍵</a>
                        <a href="#" class="list-group-item">精緻小點</a>
                        <a href="#" class="list-group-item">經典馬卡龍</a>
                        <a href="#" class="list-group-item">下午茶必備</a>
                    </div>
                </div>
                <div class="col-12 col-md-8">
                    <div class="row justify-content-center">
                        <div class="col-10 col-md-6 col-lg-6"
                            v-for= "item in category" :key="item.id">
                            <div class="products card">
                                <img :src="item.img" class="card-img-top" alt="...">
                                <div class="card-body text-start">
                                    <h5 class="card-title d-flex justify-content-between align-items-baseline">{{ item.title}}
                                        <span class="category-tag rounded-pill">{{ item.category }}</span>
                                    </h5>
                                    <p class="card-text description">{{ item.description }}</p>
                                    <div class="price-box">
                                        <del>NT$1000</del>
                                        <div class="price">NT$9999</div>
                                    </div>
                                    <button class="cartbtn" type="button"
                                        @click="getProduct()">加入購物車</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    name:"Category",
    data() {
        return {
            list:[],
            category:this.$store.state.products, // 為什麼不能直接用this.products
        }
    },
    computed: {
        ...mapState({
            products:'products',
            count:'count'
        }),
    },
    methods: {
        getProduct(item){
            let index = item.ProductId;
            console.log(index);
        },
        getCupcake() {
            return this.category.filter(item => item.category === "杯子蛋糕")
        }
    },
}
</script>
<style lang="scss">
$list-group-color:#2c3e50;
$list-group-bg: yellow;
$bg:#f4ceda;
.wrapper{
    background: lighten(grey,46%);
}
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