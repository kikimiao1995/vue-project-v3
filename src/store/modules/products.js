import data from '../../assets/product';
const state = {
    // 所有商品資料
    products: [],
}
const getters = {}
const mutations = {
    // 賦予products值
    setProducts(state, payload) {
        state.products = payload;
    }
}
const actions = {
    // 以非同步(axios)獲取資料庫的商品資料，commit由context解構而來
    // 1. import axios from 'axios';
    // 2.    
    // axios.get(url)
    //     .then((response) => {
    //         ...
    //     })
    // api :fetch('url').then(res => json())
    //                  .then(data => context.commit('setProductInfo', data))
    // 可以在Vue元件的created或mounted階段向fetchProductInfo發送dispatch
    // this.$store.dispatch('fetchProductInfo', {id:'008'}); 
    fetchProductInfo( { commit }) {
        commit('setProducts', data);
    }
}

export default {
    // 當namespaced為true，在不同module中可以使用相同的函式名稱，引入元件時要加入module名稱
    // ...mapActions('modulename', ['fetchProductInfo',''])
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}