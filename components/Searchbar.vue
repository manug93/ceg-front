<template>
    <div class="navbar-container">
        <div class="navbar">
            <div class="flex align-items-center justify-content-center banner alabaster"><span>Publicité</span></div>
            <div class="flex full-header align-items-center justify-content-center w-full darky">    
                    <span class="p-input-icon-right w-5  mt-5 mb-3">
                        <i class="pi pi-search text-white pointable" />
                        <InputText v-model="needle" placeholder="Search" class="p-inputtext-sm w-full overriden text-white py-2 ebony" ></InputText>                
                    </span>
            </div>
            <div class="flex justify-content-center  darky" >
                <p class="inline-block w-5 px-2">
                    <span>ets</span>
                    <span>etss</span>
                </p>
            </div>  
            
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
                needle:"",
                
            }
        },
        created () {
            window.addEventListener('scroll', this.handleScroll);
        },
        unmounted () {
            window.removeEventListener('scroll', this.handleScroll);
        },
        methods: {
            handleScroll (event) {
                console.log(event.target.body.scrollTop)
            }
        }
    }
</script>
<style>
 .navbar{
    position: relative;
    z-index: 1000;
 }
 .navbar{
    position: fixed;
    z-index: 1000;
    width: 100%;
 }
 .banner{    
    height: 40px;
}
</style>