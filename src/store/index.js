import { createStore } from 'vuex';
import products from '../assets/product';

export default createStore({
  state: {
    products: products,
    //  add {ProductId, ProductQuantity} to cart
    cart:[],
    count:'test123',
    shoplist:[
      {
        ProductTitle: "海島の伝説",
        ProductId: 1001,
        ProductCategory: "訂製蛋糕",
        ProductImg: "../assets/images/cake1001.jpg",
        ProductPrcie: 900,
        ProductQuantity: "0",
        ProductDescription: "傳說孕育無數生命的太平洋，在月光下的照耀下，灌溉以徐徐的海風，將花開成神秘的海水藍...，復刻神秘傳說。",
      },
    ],
    total:0,
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    }
  },
  modules: {
  }
})
