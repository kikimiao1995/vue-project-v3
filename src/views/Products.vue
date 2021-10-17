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
                        <ProductCard 
                            v-for= "product in categoryFilter" 
                            :productInfo="product"
                            :key="product.id"/>
                    </div>
                    <div class="row justify-content-end">
                        <MyPagination />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// 導入模組將需要的vuex傳入*.vue元件中，其中state與getter在computed中引入，mutation與action則在methods中引入。
import { mapState, mapActions } from 'vuex';
import MyPagination from '@/components/MyPagination.vue';
import ProductCard from '@/components/ProductCard.vue';
export default {
    name:"Products",
    components: {
        MyPagination,
        ProductCard
    },
    data() {
        return {
            categoryFilter: [],
            catNum:{cake:0,cupcake:0,tiny:0,macaron:0,tea:0},
        }
    },
    methods: {
        ...mapActions('products',['fetchProductInfo']), // products 模組裡的 fetchProductInfo 函式
        // 取得所有商品
        getAll() {
            this.categoryFilter = [ ...this.products ];
        },
        // 取得各分類的商品filter
        getCategory(itemCat) {
            return this.categoryFilter = this.products.filter(item => item.category === itemCat);
        },
        // 計算各分類的數目
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
    },
    computed: {
        ...mapState({
            products: state => state.products.products, // 使用模組的引入方式，第一個products是模組名，第二個是state名
        }),
    },
    created() {
        this.fetchProductInfo();    
        this.getAll();
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
$primary-color:#2c3e50;
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

</style>