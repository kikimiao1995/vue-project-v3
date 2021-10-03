<template>
    <div class="healthy-introduce">
        <div class="row gx-0">
            <div class="col-12 col-md-8 position-relative mb-md-3">
                <span class="img-frame"></span>
                <img src="../assets/images/introduce-card1.jpg" alt="nature material">
            </div>
            <div class="col-6 col-md-4 mb-md-3 d-flex justify-content-center position-relative bg-lightyolk">
                <div class="introduce-card vrl py-5 d-flex flex-column justify-content-center align-items-center">
                    <h3 class="introduce-title">嚴選の天然食材</h3>
                    <p class="lh-lg">農場直送的天然食材，<br>
                        合格的食品檢驗。
                    </p>
                </div>
            </div>
            <div class="col-6 col-md-4 mb-md-3 d-flex justify-content-center position-relative bg-lightyolk">
                <div class="introduce-card vrl py-5 d-flex flex-column justify-content-center align-items-center">
                    <h2 class="introduce-title">低糖油、多健康</h2>
                    <p class="lh-lg">不論是心靈健康和生理健康<br>
                        ，都貼心為您兼顧。
                    </p>
                </div>
            </div>
            <div class="col-12 col-md-8 position-relative mb-md-3">
                <span class="img-frame"></span>
                <div class="introducebg"></div>
                <img src="../assets/images/introduce-card1.jpg" alt="nature material">
            </div>
            <div class="col-12 col-md-8 position-relative mb-md-3">
                <span class="img-frame"></span>
                <div class="introducebg"></div>
                <img src="../assets/images/introduce-card1.jpg" alt="nature material">
            </div>
            <div class="col-6 col-md-4 mb-md-3 d-flex justify-content-center position-relative bg-lightyolk">
                <div class="introduce-card vrl py-5 d-flex flex-column justify-content-center align-items-center">
                    <h3 class="introduce-title">多樣化的甜點</h3>
                    <p class="lh-lg">高達三十種的產品，<br>
                        讓您的選擇障礙悄悄出現。
                    </p>
                </div>
            </div>
            <div class="col-6 col-md-4 mb-md-3 d-flex  justify-content-center position-relative bg-lightyolk">
                <div class="introduce-card vrl py-5 d-flex flex-column justify-content-center align-items-center">
                    <h2 class="introduce-title">貼心的客製化</h2>
                    <p class="lh-lg">不管是什麼甜點，<br>
                        我們都努力替您實現。
                    </p>
                </div>
            </div>
            <div class="col-12 col-md-8 position-relative mb-md-3">
                <span class="img-frame"></span>
                <img src="../assets/images/introduce-card1.jpg" alt="nature material">
            </div>
        </div>
    </div>
    <div class="introducebg"></div>
</template>
<script>
export default {
    name:"HealthyIntroduce",
}
</script>
<style lang="scss">

$color-darkred: #36563c;
.bg-lightyolk {
    background: #DAC9A6;
}

.img-frame{
    position: absolute;
    border: 2px solid #fff;
    z-index: 10;
    min-width: 94%;
    min-height: 90%;
    // vertical
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.introduce-title {
    display: inline-block;
    // color: $color-darkred;
    // border-left: thick double lighten($color-darkred,5%);
    background: lighten(#2c3e50,10%);
    color: lighten(#DAC9A6,20%);
    padding: 8px;
}

.vrl{
    writing-mode: vertical-rl;
}
</style>
