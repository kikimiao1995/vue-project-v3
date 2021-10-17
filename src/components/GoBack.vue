<template>
    <span>
        <div class="go-back text-end pe-5" @click="$router.back()">
            <span class="fw-bold">Go</span>
            <span class="fs-3 ps-1">🔙</span>
        </div>
    </span>
</template>
<style lang="scss">
    .go-back {
        cursor: pointer;
        padding: 10px;
        color: #000;
    }
</style>