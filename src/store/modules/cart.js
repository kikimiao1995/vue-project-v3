const state = {
    //  add {ProductId, ProductQuantity} to cartProducts 紀錄加入購物車的商品
    cart: [],
}
const getters = {}
const mutations = {
    PushProductsToCart(state, productId) {
        state.cart.push({
            id: productId,
            quantity:1
        });  // payload是從元件commit到store mutation 的data，透過mutation寫入state
    },
}
const actions = {
    // 按下“加入購物車”btn後，會進行的邏輯判斷
    addProductsToCart(context, product) {
        if (product.inventory >0 ) {
            let isIncart = context.state.cart.find(item => item.id === product.id) // 判斷是否已經在購物車裡面了
            if (!isIncart) {
                context.commit('PushProductsToCart',product.id)
            }
        }else{
            alert("商品已經賣完了ＱＱ");
            // 這裡要寫出disable的style 讓商品分的的button沒有作用，整個card黑色的
        }
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}