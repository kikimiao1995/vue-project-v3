<template>
    <div>
        <div class="home-banner">
            <div class="banner_text-box">
                <h1>make your life a piece of cake!</h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"HomeBanner",
}
</script>

<style lang="scss" scoped>
$color-golden:#ccac00;
.home-banner {
    position: relative;
    height: 80vh;
    background-image: 
        url(../assets/images/banner-shop.jpg);
    background-size: cover;
    background-position: bottom 10% left;
}

.banner_text-box {
    // 置中，父層要加position: relative;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    // 文字設定
    color: #fff;
    // letter-spacing: 2; -->
    padding: 10px 20px;
    background-image: linear-gradient(to right bottom, rgba(248, 227, 134, 0.8), rgba(150, 200, 212, 0.8));
    border-radius: 10px;
}


</style>
