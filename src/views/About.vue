<template>
  <div class="about bg-lightgrey">
    <div class="container p-5">
      <h2 class="double-underline">🎂 Life is a piece of cake! 🍰</h2>
    </div> 
    <HealthyIntroduce />
  </div>
</template>
<script>
import HealthyIntroduce from '@/components/HealthyIntroduce.vue'
export default {
  name:"About",
    components: {
        HealthyIntroduce
    },
}
</script>
<style lang="scss" scoped>
img {
    max-width: 100%;
    height: auto;
    /*height好像不加看不出甚麼差別，但大家都有加...*/
}

.double-underline {
  display: inline-block;
  border-bottom: thick double lighten(#2c3e50,20%);
}


// .test-card{
//   position: relative; 
//   display: flex;
//   background-size: hidden;
//   height: 400px;
//   img{
//     min-width: 100%;
//     object-fit:cover;
//   }
//   .test-text{
//     width: 50%;
//     outline: 1px solid red;
//     position: absolute;
//     right: 0;
//   }
// }




.introduce-banner{
    max-width: 100%;
    margin-bottom: 50px;
    .row{
        div{
            background: rgb(233, 229, 229);
            margin: 10px 10px;
            border: 1px solid rgb(207, 192, 192);
            box-shadow: 0 0 5px rgb(117, 104, 104);
            padding: 20px;
        }
        h5{
        color: #565656;
        font-size: 20px;
        padding-bottom: 8px;
        padding-top: 8px;
        }
        p{
            color: #797070ab;
        }
    }
}

  
</style>