const state = {
    //  add {ProductId, ProductQuantity} to cartProducts 紀錄加入購物車的商品
    carts: [],
}
const getters = {
    countCart(state){
        return state.carts.length
    },
    // 計算購買件數
    countProductsNum(state) {
        let productsNum = 0;
        state.carts.forEach(item => productsNum += item.quantity);
        return productsNum
    },
    // 計算總額
    countTotalPrice(state) {
        let total = 0;
        state.carts.forEach(item => total += item.quantity * item.price);
        console.log('total', typeof (total));
        return total
    },
    // 計算支付金額
    countTotalPayment(state, getters) { // state不可以省略
        let shippingFee = 100;
        return getters.countTotalPrice + shippingFee;
    }
}
const mutations = {
    PushProductsToCart(state, product) {
        state.carts.push({
            ...product,
            quantity:1,
        });  // payload是從元件commit到store mutation 的data，透過mutation寫入state
    },
    deleteProductFromCart(state, index) {
        state.carts.splice(index,1); 
    },

}
const actions = {
    // 按下“加入購物車”btn後，會進行的邏輯判斷
    addProductsToCart(context, product) {
        if (product.inventory >0 ) {
            let isIncart = context.state.carts.find(cart => cart.id === product.id) // 判斷是否已經在購物車裡面了
            if (!isIncart) {
                context.commit('PushProductsToCart',product)
            }
        }else{
            alert("商品已經賣完了ＱＱ");
            // 這裡要寫出disable的style 讓商品分的的button沒有作用，整個card黑色的
        }
    },
    deleteProductFromCart(context, index) {
        context.commit('deleteProductFromCart', index);
    },
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}