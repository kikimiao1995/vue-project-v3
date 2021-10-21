<template lang="pug">
nav(aria-label="Page navigation example")
    ul.pagination.justify-content-center
        li.page-item
            a.page-link(href="#", aria-label="Previous")
                span(aria-hidden="true") &laquo;
        li.page-item
            a.page-link(href="#") 1
        li.page-item
            a.page-link(href="#") 2
        li.page-item
            a.page-link(href="#") 3
        li.page-item
            a.page-link(href="#", aria-label="Next")
                span(aria-hidden="true") &raquo;
</template>
<script>
export default {
    name:"MyPagination2"
}
</script>