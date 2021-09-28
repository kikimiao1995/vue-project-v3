<template>
    <div class="bg-lightgrey py-5">
        <div class="container py-5">
            <div class="row justify-content-center">
                <div class="category-list col-11 col-md-3 mb-5">
                    <a href="#" @click.prevent="getAll()" class="list-group-item mb-2">所有商品
                        <span class="badge rounded-pill"> {{ this.products.length }} </span>
                    </a>
                    <a href="#" @click.prevent="getCategory('訂製蛋糕')" class="list-group-item mb-2">訂製蛋糕
                        <span class="badge rounded-pill text-end"> {{ this.catNum.cake }} </span>
                    </a>
                    <a href="#" @click.prevent="getCategory('杯子蛋糕')" class="list-group-item mb-2">杯子蛋糕 🍵
                        <span class="badge rounded-pill text-end"> {{ this.catNum.cupcake }} </span>
                    </a>
                    <a href="#" @click.prevent="getCategory('精緻小點')" class="list-group-item mb-2">精緻小點
                        <span class="badge rounded-pill text-end"> {{ this.catNum.tiny }} </span>
                    </a>
                    <a href="#" @click.prevent="getCategory('馬卡龍')" class="list-group-item mb-2">經典馬卡龍
                        <span class="badge rounded-pill text-end"> {{ this.catNum.macaron }} </span>
                    </a>
                    <a href="#" @click.prevent="getCategory('經典下午茶')" class="list-group-item mb-2">下午茶必備
                        <span class="badge rounded-pill text-end"> {{ this.catNum.tea }} </span>
                    </a>
                </div>
                <div class="col-11 col-md-8">
                    <div class="row justify-content-start">
                        <div class="col-12 col-md-6 col-lg-4 mb-4"
                            v-for= "item in filterCategory" 
                            :key="item.id">
                            <div class="products card">
                                <img :src="item.img" class="card-img-top" alt="item.title">
                                <div class="card-body text-start d-flex flex-column justify-content-center align-items-center">
                                    <h5 class="card-title">{{ item.title}}</h5>
                                    <div class="price-box d-flex justify-content-center align-items-center">
                                        <div><del>${{ item.price }} NTD</del></div>
                                        <div class="price fs-5 ms-3 text-red fw-bold">$9999 NTD</div>
                                    </div>
                                    <button class="cartbtn mt-2" type="button" @click="addToCart(item)">加入購物車</button>
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
    components: {
    },
    data() {
        return {
            filterCategory: [],
            catNum:{cake:0,cupcake:0,tiny:0,macaron:0,tea:0},
        }
    },
    methods: {
        getAll() {
            this.filterCategory = [ ...this.products ];
        },
        getCategory(itemCat) {
            return this.filterCategory = this.products.filter(item => item.category === itemCat);
        },
        getCatNum() {
            this.products.forEach((item) => {
                if(item.category === "訂製蛋糕"){
                    this.catNum.cake += 1 ;
                }
                if(item.category === "杯子蛋糕"){
                    this.catNum.cupcake += 1 ;
                }
                if(item.category === "精緻小點"){
                    this.catNum.tiny += 1 ;
                }
                if(item.category === "馬卡龍"){
                    this.catNum.macaron += 1 ;
                }
                if(item.category === "經典下午茶"){
                    this.catNum.tea= this.catNum.tea + 1 ;
                }
            })
        },
        addToCart(item) {
            this.$store.commit({
                type:"addToCart",
                id:item.id,
                name: item.name,
                quantity:1,
                img: item.img,
                price:900,
            });
        },
    },
    computed: {
        ...mapState({
            products:'products',
        }),
    },
    created() {
        this.getAll();  // 將vuex的資料以spread syntax傳入
        this.getCatNum(); // 計算各個分類的總數
    },
}
</script>
<style lang="scss">
// 刪除btn的按鈕陰影
.btn :focus,
.btn-dark:active:focus {  
    box-shadow: none;
}
$list-group-color:#2c3e50;
$list-group-bg: yellow;
$bg:#f4ceda;
.category-list{
    .list-group-item+.list-group-item {
        border-top-width: 1px; 
    }
    a {
        color: #2c3e50;
    }
}
.badge {
    background-color: #DAC9A6;
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
}

// hover效果
.products:hover,
.list-group-item:hover{
    transform: translate(2px, -2px);
}
// 點擊後押回的css效果
// *****-> 在.cartbtn的小果預計是打勾加入購物車的動畫
.list-group-item:active,
.cartbtn:active {
    transform: translate(0px, 0px);
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
    &:focus{

    }
}

.text-red{
    color: #b22222;
}
</style>