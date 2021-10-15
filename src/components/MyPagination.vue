<template>
    <div class="text">
        我在測試pagination
    </div>
    <div class="myList">
        <div 
            v-for="list in lists"     
            :key="list.id">
            {{ list.name }}
        </div>
    </div>
    <pagination 
        v-model="page" 
        :records="20" 
        :per-page="6" 
        @paginate="myCallback"/>
</template>
<script>
import Pagination from 'v-pagination-3';
export default {
    name:"MyPagination",
    components: {
        Pagination
    },
    data() {
        return {
            page: 1
        }    
    }   
}
</script>