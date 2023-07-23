<template>
    <div class="navbar">
        <div class="flex align-items-center justify-content-center banner red"><span>Publicité</span></div>
        <div class="flex full-header align-items-center justify-content-center dark-blue">
            <span class="p-input-icon-right my-5">
                <i class="pi pi-search text-white pointable" />
                <InputText v-model="needle" placeholder="Search" class="p-inputtext-sm overriden text-white py-2 blue" ></InputText>                
            </span>
            <span class="ml-4 text-yellow">Service Client : </span><span class="ml-3">699 888 999</span>
            <span class="ml-4 pointable" ><i class="fa  fa-user-circle" style="font-size: 1.5rem"></i></span>
            <span class="ml-4 pointable" ><i class="fa  fa-shopping-cart  mr-4" style="font-size: 1.5rem" v-BadgeDirective="2"></i></span>
        </div>
    </div>
</template>
<script>
    import Vue from "vue";
    import { BadgeDirective as badged }  from 'primevue/badgedirective';
    Vue.directive(badged);
    export default{
        data(){
            return{
                needle:""
            }
        }
    }
</script>