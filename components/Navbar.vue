<template>
    <div class="navbar-container">
        <div class="navbar">
            <div class="flex align-items-center justify-content-center banner alabaster"><span>Publicité</span></div>
            <div class="flex full-header align-items-center justify-content-center darky">
                <span class="p-input-icon-right my-5">
                    <i class="pi pi-search text-white pointable" />
                    <InputText v-model="needle" placeholder="Search" class="p-inputtext-sm overriden text-white py-2 ebony" ></InputText>                
                </span>
                <span class="ml-4 text-yellow">Service Client : </span><span class="ml-3">699 888 999</span>
                <span class="ml-4 pointable" ><i class="fa  fa-user-circle" style="font-size: 1.5rem"></i></span>
                <span class="ml-4 pointable" ><i class="fa  fa-shopping-cart  mr-4" style="font-size: 1.5rem" v-BadgeDirective="2"></i></span>
                <span class="ml-3 pointable flex align-items-center" ><a href=""><img class="w-1rem mr-1" src="../assets/img/fr.svg"></a></span>
                <span class="ml-3 pointable flex align-items-center" ><a href=""><img class="w-1rem mr-1" src="../assets/img/en.svg"></a></span>
            </div>
            <div class="darky" >
                <div class="menu flex text-xs align-items-center justify-content-center flex-row flex-wrap">
                    <div class="menu-item pointable text-center mx-3 my-2">{{$t("menu.wine")}} <i class="fa fa-caret-down"></i>
                        <div class="submenu darky">                        
                            <ul class="submenu-list">
                                <li class="submenu-item text-justify px-3 py-1">Alsace</li>
                                <li class="submenu-item text-justify px-3 py-1">Beaujolais</li>
                                <li class="submenu-item text-justify px-3 py-1">Bordeaux</li>
                                <li class="submenu-item text-justify px-3 py-1">Bourgogne</li>
                                <li class="submenu-item text-justify px-3 py-1">Champagne</li>
                                <li class="submenu-item text-justify px-3 py-1">Corse</li>
                                <li class="submenu-item text-justify px-3 py-1">Jura</li>
                                <li class="submenu-item text-justify px-3 py-1">Languedoc-Roussillon</li>
                                <li class="submenu-item text-justify px-3 py-1">Loire</li>
                                <li class="submenu-item text-justify px-3 py-1">Provence</li>
                                <li class="submenu-item text-justify px-3 py-1">Rhône</li>
                                <li class="submenu-item text-justify px-3 py-1">Savoie</li>
                                <li class="submenu-item text-justify px-3 py-1">Sud-Ouest</li>                            
                            </ul>
                        </div>
                    </div>
                    <div class="menu-item pointable text-center mx-3 my-2">{{$t("menu.champagne")}} <i class="fa fa-caret-down"></i>
                        <div class="submenu darky">                        
                            <ul class="submenu-list">
                                <li class="submenu-item text-justify px-3 py-1"><nuxt-link to="/about">Bio</nuxt-link></li>
                                <li class="submenu-item text-justify px-3 py-1">Brut</li>
                                <li class="submenu-item text-justify px-3 py-1">Brut Millésimé</li>
                                <li class="submenu-item text-justify px-3 py-1">Brut Nature</li>
                                <li class="submenu-item text-justify px-3 py-1">Extra-brut</li>
                                <li class="submenu-item text-justify px-3 py-1">Brut demi-sec</li>
                                <li class="submenu-item text-justify px-3 py-1">Brut Rosé</li>
                                <li class="submenu-item text-justify px-3 py-1">Rosé de Saignée</li>
                                <li class="submenu-item text-justify px-3 py-1">Blanc de blancs</li>
                                <li class="submenu-item text-justify px-3 py-1">Blanc de noirs</li>                         
                            </ul>
                        </div>
                    </div>
                    <div class="menu-item pointable text-center mx-3 my-2">{{$t("menu.spirit")}} <i class="fa fa-caret-down"></i></div>
                    <div class="menu-item pointable text-center mx-3 my-2">{{$t("menu.promotion")}} <i class="fa fa-caret-down"></i></div>
                    <div class="menu-item pointable text-center mx-3 my-2">{{$t("menu.event")}} <i class="fa fa-caret-down"></i></div>
                </div>
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
 .navbar-container{
 }
 .navbar{
    position: fixed;
    z-index: 1000;
    width: 100%;
 }
</style>