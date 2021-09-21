<template>
  <div class="about">
    <div class="test-card container">
      <img src="../assets/images/introduce-card1.jpg" alt="">
      <div class="boder border-5"></div>
      <div class="test-text">box444</div>
    </div>


    <div class="introduce-card">
      <div class="introduce"
        :style="{backgroungImage:`url(../assets/images/introduce-card1.jpg)`}">
        hi
        <!-- <img src="@/assets/images/introduce-card1.jpg" alt="nature material"> -->
      </div>
    </div>
  </div>

    <h1>This is an about page</h1>
    <div class="container">
      <h2>Life is a piece of cake!</h2>
      
      <div class="introduce-card">
        <div class="row mx-0 justify-content-center">
          <div class="col-md-5 text-center">
            <img src="https://img.icons8.com/ios-filled/60/000000/flour-of-rye--v1.png"/>
            <h5 class="fs-5">嚴選天然食材</h5>
            <p>採用天然的食材、契作農場直送，公開的食品來源＆各種合格檢驗</p>
          </div>
          <!-- <div class="col-md-5 text-center">
              <img src="https://img.icons8.com/ios-glyphs/60/000000/cake.png"/>
              <h5 class="fs-5">多樣化的甜點</h5>
              <p>高達30種的產品，讓您的選擇障礙悄悄出現。</p>
          </div>
          <div class="col-md-5 text-center">
              <img src="https://img.icons8.com/ios/60/000000/no-sugar2.png"/>
              <h5 class="fs-5">少糖少油多了健康</h5>
              <p>心靈健康和生理健康，我們都會為您顧及。</p>
          </div>
          <div class="col-md-5 text-center">
              <img src="https://img.icons8.com/ios/60/000000/pastry-bag.png"/>
              <h5 class="fs-5">貼心的客製化</h5>
              <p>不管是什麼甜點，只要您想出來，我們都努力替您實現。</p>
          </div> -->
        </div> 
      </div>
      <!-- introduce-banner -->
      <!-- <div class="introduce" style="height: 300px;">
          <div class="container-md d-flex flex-column justify-content-center align-items-center">
              <h2 class="mt-2 mb-5 fs-2">Life is a piece of cake!</h2>
          <div class="container-fluid introduce-banner">
              <div class="row mx-0 justify-content-center">
                  <div class="col-md-5 text-center">
                  <img src="https://img.icons8.com/ios-filled/60/000000/flour-of-rye--v1.png"/>
                  <h5 class="fs-5">嚴選天然食材</h5>
                  <p>採用天然的食材、契作農場直送，公開的食品來源＆各種合格檢驗</p>
                  </div>
                  <div class="col-md-5 text-center">
                      <img src="https://img.icons8.com/ios-glyphs/60/000000/cake.png"/>
                      <h5 class="fs-5">多樣化的甜點</h5>
                      <p>高達30種的產品，讓您的選擇障礙悄悄出現。</p>
                  </div>
                  <div class="col-md-5 text-center">
                      <img src="https://img.icons8.com/ios/60/000000/no-sugar2.png"/>
                      <h5 class="fs-5">少糖少油多了健康</h5>
                      <p>心靈健康和生理健康，我們都會為您顧及。</p>
                  </div>
                  <div class="col-md-5 text-center">
                      <img src="https://img.icons8.com/ios/60/000000/pastry-bag.png"/>
                      <h5 class="fs-5">貼心的客製化</h5>
                      <p>不管是什麼甜點，只要您想出來，我們都努力替您實現。</p>
                  </div>
              </div> 
          </div>
        </div> -->
    </div> 
</template>
<script>
export default {
  
}
</script>
<style lang="scss">
img {
    max-width: 100%;
    height: auto;
    /*height好像不加看不出甚麼差別，但大家都有加...*/
}
.test-card{
  position: relative; 
  display: flex;
  background-size: hidden;
  height: 400px;
  img{
    min-width: 100%;
    object-fit:cover;
  }
  .test-text{
    width: 50%;
    outline: 1px solid red;
    position: absolute;
    right: 0;
  }
}


.introduce-card{
  .introduce{
    height: 300px;
    background: linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8) );
    background-position:center top;
    background-size: cover;
    
  }
}

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