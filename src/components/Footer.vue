<template>
    <footer>
        <div class="container-fluid">
            <ul class="contactLogo list-unstyled">
                <li><a href="mailto:kikimiao1995@gmail.com"><i class="bi bi-envelope-fill"></i></a></li>
                <li><a href="https://github.com/kikmiao1995"><i class="bi bi-github"></i></a></li>
                <li><a href="tel:+886-975126187"><i class="bi bi-telephone-fill"></i></a></li>
            </ul>
            <p>©Copright 2021-Aug kikimiao1995</p>
            <p>Dian la 網頁僅供個人作品使用，不做商業使用</p>
        </div>
    </footer>    
</template>

<script>
export default {
    name:"footer",
}
</script>

<style lang="scss">
$color-golden:#ccac00;
$color-darkblue:#2c3e50;
footer{
    padding: 80px;
    background: $color-darkblue;
    color:darken($color-golden,10%);
}
.contactLogo{
        display: flex;
        justify-content: center;
        align-items: center;
        li{
            padding-right: 15px;
            a{
                display: inline-block;
                padding: 10px 14px;
                border: 1px dashed $color-golden;
                border-radius: 50%;
                color: $color-golden;
                &:hover{
                    color: lighten($color-golden,20%);
                    border: 1px dashed lighten($color-golden,20%);
                }
            }
        }
    }
</style>