<template>
    <div class="navbar-container">
        <div class="navbar">
            <div class="flex align-items-center justify-content-center banner alabaster"><span>Publicité</span></div>
            <div class="flex full-header align-items-center justify-content-center w-full darky">    
                    <span class="p-input-icon-right w-5  mt-5 mb-3">
                        <i class="pi pi-search text-white pointable" />
                        <AutoComplete  v-model="needle"  :suggestions="filteredWinesBasic" @complete="searchWine($event)" field="item.title"  placeholder="Search" class="p-inputtext-sm w-full overriden  border-round-lg text-white  ebony" ></AutoComplete >                
                    </span>
                    <span class="mt-5 mb-3 ml-4 pointable" @click="back"> <i class="pi pi-times"></i></span>
            </div>
            <div class="flex justify-content-center  darky" >
                <p class="inline-block w-5 px-2">
                    <span class="text-yellow">Suggestions : </span>
                    <a href="#"><i>Vin rouge</i></a>
                </p>
            </div>  
            
        </div>
    </div>
    
</template>
<script>
    import Vue from "vue";
    import wines from "../store/wines";
    import Fuse from 'fuse.js';
    const options = { keys: ['title', 'millesime','pays','region'] }
    const myIndex = Fuse.createIndex(options.keys, wines)
    const fuse = new Fuse(wines, options, myIndex)
    import { BadgeDirective as badged }  from 'primevue/badgedirective';
    Vue.directive(badged);    
    export default{        
        props:['q'],
        data(){
            return{
                needle:this.$route.query.q,
			    filteredWinesBasic: null
                
            }
        },
        created () {
            window.addEventListener('scroll', this.handleScroll);
            console.log(this.$route.query.q);
        },
        unmounted () {
            window.removeEventListener('scroll', this.handleScroll);
        },
        methods: {
            handleScroll (event) {
                console.log(event.target.body.scrollTop)
            },
            searchWine(event) {
                this.filteredWinesBasic = fuse.search(event.query,{limit:10});
		    },
            back(){
                this.$router.push('/')
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

.overriden{
    font-family: "MarkPro-Medium" !important;
}
input.p-inputtext-sm.overriden{    
    color:white;
    outline-color: none;
}
input.p-inputtext-sm.overriden:hover{
    border-color: transparent;
    outline-color: none;
}
input.p-inputtext-sm.overriden::-webkit-input-placeholder {
    color: white; /*Change the placeholder color*/
    opacity: 1; /*Change the opacity between 0 and 1*/
}

.navbar .p-autocomplete-input{
    background-color: var(--ebony-color);
    width: 90%;
    height: 40px;
    color:white;
    font-family: "MarkPro-Medium";
    font-size: 0.75em;
}
.navbar .p-autocomplete-input:focus{
    outline-color: transparent;
    box-shadow: none;
}
.navbar .p-autocomplete-input:hover{    
    outline-color: transparent;
    box-shadow: none;
}
.navbar .p-autocomplete-input::-webkit-input-placeholder {
    color: white; 
    opacity: 1; 
}
.navbar .p-autocomplete-input::placeholder {
    color: white; 
    opacity: 1; 
}

.navbar .pi{
    z-index: 10;
}
</style>