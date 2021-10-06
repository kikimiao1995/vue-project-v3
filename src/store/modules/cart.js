const state = {
    //  add {ProductId, ProductQuantity} to cartProducts 紀錄加入購物車的商品
    cartProducts: [],
}
const getters = {}
const mutations = {
    addToCart(state, payload) {
        state.cartProducts.push(payload); // payload是從元件commit到store mutation 的data，透過mutation寫入state
    },
}
const actions = {}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}