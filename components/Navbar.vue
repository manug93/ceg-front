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
       <div class="dark-blue" >
            <div class="menu flex text-xs align-items-center justify-content-center flex-row flex-wrap">
                <div class="menu-item pointable text-center mx-3 my-2">{{$t("menu.wine")}} <i class="fa fa-caret-down"></i>
                    <div class="submenu dark-blue">
                        <ul class="submenu-list">
                            <li class="submenu-item"></li>
                        </ul>
                    </div>
                </div>
                <div class="menu-item pointable text-center mx-3 my-2">{{$t("menu.champagne")}} <i class="fa fa-caret-down"></i></div>
                <div class="menu-item pointable text-center mx-3 my-2">{{$t("menu.spirit")}} <i class="fa fa-caret-down"></i></div>
                <div class="menu-item pointable text-center mx-3 my-2">{{$t("menu.promotion")}} <i class="fa fa-caret-down"></i></div>
                <div class="menu-item pointable text-center mx-3 my-2">{{$t("menu.event")}} <i class="fa fa-caret-down"></i></div>
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
                items:[
                    {
                        name:"Manug",
                        Description:"Description"
                    },
                    {
                        name:"Manej",
                        Description:"Description"
                    },
                    {
                        name:"Naug",
                        Description:"Description"
                    }
                ],
                responsiveOptions: [
                    {
                        breakpoint: '1024px',
                        numVisible: 3,
                        numScroll: 3
                    },
                    {
                        breakpoint: '600px',
                        numVisible: 2,
                        numScroll: 2
                    },
                    {
                        breakpoint: '480px',
                        numVisible: 1,
                        numScroll: 1
                    }
                ]
            }
        }
    }
</script>
<style>
 
</style>