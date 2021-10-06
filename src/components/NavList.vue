<template>
    <div class="nav-list router d-none d-md-flex">
        <router-link to="/">
            <div class="nav-title fw-bold">Home</div>
            <div class="nav-subtitle">首頁</div>
        </router-link> |
        <router-link to="/about">
            <div class="nav-title fw-bold">About</div>
            <div class="nav-subtitle">關於</div>
        </router-link> |
        <router-link to="/products">
            <div class="nav-title fw-bold">Category</div>
            <div class="nav-subtitle">商品分類</div>
        </router-link> |
        <router-link to="/class">
            <div class="nav-title fw-bold">Class</div>
            <div class="nav-subtitle">課程</div>
        </router-link> |
        <router-link to="/contact">
            <div class="nav-title fw-bold">Contact</div>
            <div class="nav-subtitle">聯絡</div>
        </router-link>
    </div>
    <router-view/>
</template>
<script>
export default {
    name:"NavList",
}
</script>
<style lang="scss" scoped>
$color-golden:#ccac00;
.nav-list{
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #e4e4e4;
    a{
        display: block;
        text-decoration: none;
        color:#333;
        padding: 15px 30px;
        margin: 0 5px;
    }
}
.nav-subtitle{
    font-size: 12px;
}
</style>