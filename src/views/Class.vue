<template>
    <div class="wrapper p-5">
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-4 d-flex d-lg-block">
                    <div class="filterbtn">訂製蛋糕</div>
                    <div class="filterbtn">杯子蛋糕</div>
                    <div class="filterbtn">精緻小點</div>
                    <div class="filterbtn">馬卡龍</div>
                    <div class="filterbtn">下午茶必備</div>
                </div>
            </div>
        </div>
    </div>
    
</template>
<script>
export default {
    name:"Class",
}
</script>
<style lang="scss">
$color-darkred:#800000;
$color-rice:#DAC9A6;
$color-golden:#ccac00;
$color-darkblue:#2c3e50;

.filterbtn{
    margin-left:5px;
    padding: 10px;
    border-radius: 15px;
    background: darken($color-darkblue,5%);
    color:$color-golden;
    cursor: pointer;
    
}
</style>
