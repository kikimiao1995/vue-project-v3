<template>
    <div v-if="cart.length >  0">
        <ShoppingFlow />
        <div class="cart py-5 bg-lightgrey">
            <div class="container">
                <div class="row justify-content-lg-center">
                    <div class="col-12 col-lg-7 mb-5 mb-lg-0">
                        <div class="text-end">* 購物車 (total件) *</div>
                        <div class="cartList border bg-white">
                            <div class="cartTitle">
                                <div class="row mx-0 border-bottom align-items-center">
                                    <div class="col-5 col-md-5 col-lg-6">商品</div>
                                    <div class="col-3 col-md-2">數量</div>
                                    <div class="col-2">總計</div>
                                    <div class="col-2 col-md-1"></div>
                                </div>
                            </div>
                            <div class="cartItem"
                                v-for="item in cart"
                                :key="item.id">
                                <div class="row my-4 align-items-center">
                                    <div class="col-5 col-md-5 col-lg-6 d-flex align-items-center justify-content-center">
                                        <div class="cart-img d-none d-md-block" :style="`background-image:url('${ item.img }')`"></div>
                                        <!-- <div class="cart-img d-none d-md-block">
                                            <img :src="item.img" alt="item.title">
                                        </div> -->
                                        <div class="mx-3">
                                            <div class="fw-bold">{{ item.name }}</div>
                                            <div>${{ item.price }} NTD</div>
                                            <div class="dicount"></div>
                                        </div>
                                    </div>
                                    <div class="col-3 col-md-2">
                                        <input v-model="item.quantity" type="number" min="1" class="number-input">
                                    </div>
                                    <div class="col-2">${{ item.price }}</div>
                                    <div class="col-2 col-md-2">
                                        <span class="deleteItem">x</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-4 ms-lg-3">
                        <div class="shoppingList p-4">
                            <h4 class="py-3">訂單資訊</h4>
                            <table class="table">
                                <tbody>
                                    <tr v-for="item in cart"
                                        :key="item.id">
                                        <td >{{ item.name }}</td>
                                        <td>{{ item.quantity }}</td>
                                        <td class="text-right">NT$1000</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="text-end pe-2">
                                <p>小計：NT$2000</p>
                                <p>運費：NT$100</p>
                                <hr>
                                <p class="fw-bold">合計：NT$2100</p>
                            </div>
                            <div class="btn-full">前往結帳</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <div class="container my-5 py-lg-5">
            <div class="row justify-content-center text-center">
                <div class="ms-3 ps-5">
                    <router-link class="btn btn-dark" to="/category#">繼續購物</router-link>
                </div>
                <div class="col-9 col-lg-6 my-2">
                    <img class="rounded" src="../assets/images/draw.jpg" alt="logo">
                    <p class="ms-3 ps-5 my-3">Oops～您的購物車是空的喔！🔙</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ShoppingFlow from '@/components/ShoppingFlow.vue'
export default {
    name:"Cart",
    components: {
        ShoppingFlow
    },
    data () {
        return {
            loading:false,
        }
    },
    computed: {
        cart(){
            return this.$store.state.cart;
        },
    }
}
</script>
<style lang="scss" scoped>
.cartTitle{
    background: lighten(grey,33%);
}
.cart-img{
    width: 140px;
    height: 110px;
    background-size: 100% 100%;
}
.number-input{
    width: 70px;
    padding: 10px;
    background: transparent; // 跟父層相同
    text-align: center;
    border: 1px solid #2c3e50;
    cursor: pointer;
}
.deleteItem{
    color:#2c3e50;
    background:lighten(#DAC9A6,15%);
    padding: 2px 9px;
    border-radius: 6px;
    cursor: pointer;
    &:hover{
        background:lighten(#DAC9A6,2%);
    }
}
.shoppingList{
    background-color: #DAC9A6;
}
.table{
    border-color: #DAC9A6;
    background-color: lighten(#DAC9A6,20%);
}
.btn-full{
    display: block;
    background: #2c3e50;
    color: lighten(#DAC9A6,20%);
    text-align: center;
    cursor: pointer;
    padding: 10px 0px;
}

// .btn 共用的basic樣式
.btn {
    display: inline-block;
    border: 1px solid #2c3e50;
    letter-spacing: 3px;
}
//.btn 延伸樣式
.btn-dark {
    background: #2c3e50;
}

// empty cart
$color-golden:#ccac00;
a {
    
    &.router-link-exact-active {
        color: darken($color-golden, 7%);
    }
    &:hover {
        color: lighten($color-golden, 5%);
        border-bottom: 2px solid lighten($color-golden, 5%);
    }
}
</style>