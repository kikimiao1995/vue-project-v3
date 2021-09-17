<template>
    <div class="cart py-5">
        <div class="shopping-flowchart my-4 container">
            <div class="step">
                <span class="step-badge">1</span>
                <p>購物車</p>
            </div>
            <div class="step">
                <span class="step-badge">2</span>
                <p>填寫資料</p>
            </div>
            <div class="step">
                <span class="step-badge">3</span>
                <p>訂單確認</p>
            </div>
        </div>
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
                        <div class="cartItem">
                            <div class="row my-4 align-items-center">
                                <div class="col-5 col-md-5 col-lg-6 d-flex align-items-center justify-content-center">
                                    <div class="cart-img d-none d-md-block" style="background-image:url(https://i.imgur.com/qzaFDFD.jpg)"></div>
                                    <div class="mx-3">
                                        <div class="fw-bold">海島の伝説</div>
                                        <div>$250 NTD</div>
                                        <div class="dicount"></div>
                                    </div>
                                </div>
                                <div class="col-3 col-md-2">
                                    <input type="number" min="1" class="number-input">
                                </div>
                                <div class="col-2">$1900</div>
                                <div class="col-2 col-md-2">
                                    <span class="deleteItem inline-block">x</span>
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
                                <tr>
                                    <td >海島の伝説</td>
                                    <td>9</td>
                                    <td class="text-right">NT$1000</td>
                                </tr>
                                <tr>
                                    <td>海島の伝説</td>
                                    <td>9</td>
                                    <td>NT$1000</td>
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
</template>
<script>
export default {
    name:"Cart",
    data () {
        return {
            loading:false,
        }
    },
    computed: {
        cart(){
            return this.$store.state.cart;
        },
        product () {
            return this.$store.getter.availableProducts;
        }
    }
}
</script>
<style lang="scss" scoped>
.cart{
    background: lighten(grey,46%); // .bg-light 更淺一點
}
.step{
    display: inline-block;
    width: 240px;
    max-width: 33%;
    .step-badge{
        position: relative;
        display: block;
        z-index: 1;
        &::after{
            // content: '';
            // position: absolute;
            // width: 36px;
            // height: 36px;
            // border-radius: 18px;
            // background-color: lighten(grey,10%);
            // z-index: -1;
        }
        &:not(:last-child)::before{
            content: '';
            position: absolute;
            top: 50%;
            height: 1px;
            background: #000;
            width:100%;
        }
    }
}

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
}
.deleteItem{
    color:grey;
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
</style>