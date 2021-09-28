import { createStore } from 'vuex';
import products from '../assets/product';

export default createStore({
  state: {
    products: [...products],
    //  add {ProductId, ProductQuantity} to cart
    cart:[],
    total:0,
  },
  getters: {
    getTotalNum() {

    }
  },
  mutations: {
    addToCart(state, payload) {
      state.cart.push(payload); // payload是從元件commit到store mutation 的data，透過mutation寫入state
    },
    // increment (state) {
    //   state.count++
    // }
  },
  actions: {
    fetchProducts() {
      // api :fetch('url').then(res => json())
      //                  .then(data => context.commit('setProductInfo', data))
      // 通常會在元件的created來發送dispatch
      // this.$store.dispatch('setProducts', {id:'008'});
    },
    increment (context) {
      context.commit('increment')
    }
  },
  modules: {
  }
})
