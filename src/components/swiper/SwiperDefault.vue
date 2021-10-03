<template>
    <div>
        <swiper>
            <swiper-slide v-for=" (item,index) in slide " :key="index">
                Slide {{ item }}
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
// 以組件方式引入 -> ?
// import style (>= Swiper 6.x) 新版載入方式

export default {
    name:"SwiperDefault",
    components: { 
            // Swiper,
            // swiperSlide 
    },
    directives: {
        // swiper: directive
    },
    data() {
        return {
            slide: [1, 2, 3, 4, 5, 6]
        }
    },
}
</script>

<style lang="scss" scope>
    
</style>