<template lang="pug">
.bg-lightgrey.pt-5
    .container.pt-5
        .shopping-flow
            .line
            .step.active
                span( style="--step-content:'1'" )
                p 購物車
            .step 
                span( style="--step-content:'2'" )
                p 填寫資料
            .step 
                span( style="--step-content:'3'" ) 
                p 訂單確認
</template>
<script>
export default {
    name:"ShoppingFlow",
}
</script>
<style lang="scss">
.shopping-flow{
    display: flex;
    justify-content: center;
    position: relative;
    .line{
        min-width: calc(90% / 6 * 4) ;
        position: absolute;
        border-bottom:2px solid lighten(grey,33%);
        top: 25px;
        z-index:10;
    }
    .step{
        min-width:30%;
        max-width: 240px;
        position: relative;
        span{
            display: block;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 50px;
            width: 100%;
            &::before{
                content:var(--step-content);
                position: absolute;
                background: lighten(grey,33%);
                padding: 8px 16px;
                border-radius: 20px;
                z-index: 20;
            }
        }
        p{
            padding-top: 8px;
            text-align: center;
        }
    }
    .step.active span::before{
                background: lighten(#2c3e50,20%);
                color:white;
            }
}

</style>
