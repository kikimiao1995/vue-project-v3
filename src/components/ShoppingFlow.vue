<template lang="pug">
    .shopping-flow
        .step 
            span 1
            p 購物車
        .step 
            span 2
            p 購物車
        .step 
            span 3
            p 購物車
</template>
<script>
export default {
    name:"shoppingFlow",
}
</script>
<style lang="scss">
    .shopping-flow{
  display: table; // 解決子層inline-block之間的空格
  margin:0 auto;  // why 沒有水平置中 =>加上display: table就有了？why =>
}
.step{
    display: inline-block;
    max-width: 33%; // 33%不能自適應誒why？ =>加上inline-block間的空格會超過100%掉到下一行
    width: 240px;
    span{
        outline: 1px solid blue;
        display: block;
        padding: 20px;
        text-align: center;
        vertical-align: middle;
        position: relative; // 讓偽元素（position: absolute;）以span為基準去調整位置
        &::before{
        content:"";
        background: grey;
        padding: 30px;
        border-radius: 15px;
        }
    }
    p{
        outline: 1px solid red;
    }
}

</style>
