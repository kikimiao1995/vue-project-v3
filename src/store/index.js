import { createStore } from 'vuex';
import products from './modules/products';
import cart from './modules/cart';


export default createStore({
  state: {
    //  add {ProductId, ProductQuantity} to cartProducts
    cartProducts: [],
    total:0,
  },
  getters: {
    getTotalNum() {

    }
  },
  mutations: {
    // increment (state) {
    //   state.count++
    // }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    }
  },
  // 引用模組
  modules: {
    products,
    cart
  }
})
