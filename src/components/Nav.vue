<template>
    <div class="container-fluid">
        <div class="navbar px-3 line">
            <div class="menubtn" data-bs-toggle="offcanvas" data-bs-target="#menubtn">
                <svg xmlns="http://www.w3.org/2000/svg" width="35px" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
            </div>
            <div class="logo">
                <a href="#">
                    <img src="../assets/images/logo.jpg" alt="logo"/>
                </a>
            </div>
            <div class="nav-right">
                <div class="cart">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35px" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                    </svg>
                </div>
            </div>
        </div>
        <div class="offcanvas offcanvas-start p-3" data-bs-scroll="true" id="menubtn">
            <div class="btn text-reset text-end" data-bs-dismiss="offcanvas">
                <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </div>
            <ul class="sidebarList text-uppercase text-decoration-none fs-5 list-unstyled">
                <li>Home</li>
                <li>Product - 產品</li>
                <li>About - 關於</li>
                <li>Contact - 聯絡</li>
                <li>Class - 課程</li>
                <li>Login - 登入</li>

                
            </ul>
        </div>
        
    </div>
    
</template>
    
<script>
    export default {
        name:'nav',
        data(){
            return{

            }
        },
        methods:{
            toggleMenu(){
            }
        }
    }

</script>

<style lang="scss" scoped>

$text-color:red;
$text-color-2:#2c3e50;
//navbar
//RWD
//1. 調整logo大小
//2. 用BS5調整margin，在手機時變小    
//3. visibility: visible|hidden
.line{
    outline:1px solid red;
}
.menubtn{
    cursor: pointer;
}
.cart{
    cursor: pointer;
}
.logo{
    a{  
        display: inline-block;
        width: 500px;
    }
}
.sidebarList{
    li{
        margin: 0 30px;
        padding: 15px 0;
        border-bottom: 1px solid #bac2c2;
    }
}
</style>