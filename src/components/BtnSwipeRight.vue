<template>
    <div class="btn-swipe-right d-flex justify-content-center text-center my-5">
        <router-link to="/products#section-nav">
            <span>{{ msg }}</span>
        </router-link>
    </div>
</template>
<script>
export default {
    name:"BtnSwiperRight",
    props: {
        msg: String
    }
}
</script>
<style lang="scss">
.btn-swipe-right a{
    display: block;
    width: 150px;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    font-family: sans-serif;
    text-decoration: none;
    color: #2c3e50;
    border: 1px solid #2c3e50;
    letter-spacing: 2px;
    text-align: center;
    position: relative;
    transition: all .35s;
}

.btn-swipe-right a span{
    position: relative;
    z-index: 10;
}

.btn-swipe-right a:after{
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: #2c3e50;
    transition: all .35s;
}

.btn-swipe-right a:hover{
    color: #fff;
}

.btn-swipe-right a:hover:after{
    width: 100%;
}
</style>