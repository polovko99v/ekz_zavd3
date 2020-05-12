<template>
    <form @submit.prevent>
        From date <input type="date" v-model="searchString.fromDate">
        <input type="button" value="Шукати" @click="search()">
        <input type="button" value="Очистити пошук" @click="clear()">
    </form>
</template>
<script>
import {mapMutations} from 'vuex';
export default {
    data(){
        return{
           searchString:{
               fromDate:"1999-10-10",
               type:Date,
           }
        }
    },
    methods:{
        ...mapMutations(["setSerchString"]),
         clear(){
            this.searchString.fromDate="";
            this.setSerchString(this.searchString);
        },
        search(){            
            this.setSerchString(this.searchString);
        }
       
    }
}
</script>
<style scoped>

</style>