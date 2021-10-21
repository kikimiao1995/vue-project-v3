<template>
    <section id="section-nav" >
        <div class="container-fluid">
            <div class="navbar mw-100 px-3 flex-nowrap justify-content-between align-items-center">
                <div class="menubtn" data-bs-toggle="offcanvas" data-bs-target="#menubtn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35px" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </div>
                <div class="logo mx-3">
                    <router-link to="/">
                        <img src="../assets/images/logo.jpg" alt="logo"/>
                    </router-link>
                </div>
                <div class="nav-right">
                    <router-link to="/menber" class="d-none d-md-inline-block me-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32px" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                        </svg>
                    </router-link>
                    <router-link to="/cart" class="cart-link">
                        <div v-if="countCart != 0">
                            <span class="cart-badge" :style="`--step-content:'${countCart}'`"></span>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30px" fill="currentColor" class="bi bi-bag me-2" viewBox="0 0 16 16">
                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                        </svg>
                    </router-link>
                    <!-- <router-link to="/cart" class="d-none d-md-inline-block">
                        <svg xmlns="http://www.w3.org/2000/svg" width="27px" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                    </router-link> -->
                </div>
            </div>
            <div class="sidebar">
                <div class="offcanvas offcanvas-start p-3" data-bs-scroll="true" id="menubtn">
                    <div class="btn text-reset text-end" data-bs-dismiss="offcanvas">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </div>
                    <div class="sidebarList text-uppercase text-decoration-none fs-5 list-unstyled router">
                        <router-link to="/">
                            <div class="sidebarListLink" data-bs-dismiss="offcanvas">Home - 首頁</div>
                        </router-link>
                        <router-link to="/about">
                            <div class="sidebarListLink" data-bs-dismiss="offcanvas">About - 關於</div>
                        </router-link>
                        <router-link to="/products">
                            <div class="sidebarListLink" data-bs-dismiss="offcanvas">Category - 商品分類</div>
                        </router-link>
                        <!-- <router-link to="/class">
                            <div class="sidebarListLink" data-bs-dismiss="offcanvas">Class - 課程</div>
                        </router-link>
                        <router-link to="/contact">
                            <div class="sidebarListLink" data-bs-dismiss="offcanvas">Contact - 聯絡</div>
                        </router-link> -->
                        <router-link to="/cart">
                            <div class="sidebarListLink" data-bs-dismiss="offcanvas">Cart - 購物車</div>
                        </router-link>
                        <router-link to="/menber">
                            <div class="sidebarListLink" data-bs-dismiss="offcanvas">Login - 登入</div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
    
<script>
import { mapGetters } from 'vuex'
export default {
    name:'Nav',
    computed: {
        ...mapGetters('cart',['countCart',]),
    }
    
}
</script>

<style lang="scss" scoped>
$text-color:#2c3e50;
$color-golden:#ccac00;
//navbar
//RWD
//1. 調整logo大小
//2. 用BS5調整margin，在手機時變小    
//3. visibility: visible|hidden
.menubtn{
    cursor: pointer;
    visibility: hidden;
    @media(max-width:768px){ //在768px(包含)以下，裡面的樣式會被開啟
    visibility: visible;
    }
}

.logo{
    a{  
        display: inline-block;
        max-width: 500px;
        // img{
        //     @media(max-width:768px){ 
        //     max-width:70%;
        //     }
        // }
    }
}

.nav-right{
    a{
        color:$text-color;
        margin-left: 10px;
        display: inline-block;
    //     &.router-link-exact-active {
    //     color: darken($color-golden, 7%);
    // }
        // &:hover {
        //     color: lighten($color-golden, 5%);
        // }
    }
}

.sidebarList {
    a{
        display: block;
        margin: 0 30px;
        padding: 15px 0;
        border-bottom: 1px solid #bac2c2;
        text-decoration: none;
        color:$text-color;
    }
}

.cart-link {
    position: relative;
    .cart-badge {
            display: block;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 50px;
            width: 100%;
            &::before{
                content:var(--step-content);
                position: absolute;
                top:66px;
                background: lighten(#2c3e50,30%);
                padding: 2px 8px;
                border-radius: 20px;
                z-index: 20;
                color: #fff;
                font-size: 10px;
            }
        }
}
</style>