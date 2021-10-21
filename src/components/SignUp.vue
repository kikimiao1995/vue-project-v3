<template>
<section class="sign-up">
    <div class="container">
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
        </svg>
        <h3 class="my-4">welcome</h3>
        <div class="register">
            <input type="text" v-model="name" placeholder="Enter Name" />
            <input type="email" v-model="email" placeholder="Enter Email" />
            <input type="password" v-model="password" placeholder="Enter Password" />
            <button onclick="signUp">登入</button>
        </div>
    </div>
</section>
</template>   
<script>
export default {
    name:'Menber', // 自訂component name
    data(){
        return{
            name:'',
            email:'',
            password:''
        }
    },
    methods: {
        signUp(){
            console.log(` join us`);
        }
    },
}
</script>
<style lang="scss" scoped>
$color-darkblue:#2c3e50;

.sign-up{
    padding: 100px 0;
}
.register{
    input{
        width: 300px;
        height: 40px;
        display: block;
        margin: 0 auto;
        margin-bottom: 30px;
        border: 1px solid $color-darkblue;
        cursor: pointer;
        &:focus{
            background: lighten(#DAC9A6,20%);
        }
    }
    button{
        width: 300px;
        height: 40px;
        border: 1px solid $color-darkblue;
        background: $color-darkblue;
        color: #fff;
        cursor: pointer;
        &:hover{
            background: lighten(#2c3e50,10%);
        }
    }
}
</style>