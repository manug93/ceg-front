<template>
    <div>
        <Searchbar></Searchbar>
        <div class="grid main">
            <div class="sidebar lg:col-3 sm:col-5">
                <div>
                    <ul class="search-criterias"> <span class="inline-block my-3">Type de vin</span> 
                        <li class="my-2 p-1 text-sm flex text-ebony justify-content-between"><span class="">Rouge</span> <span class="">234</span></li>
                        <li class="my-2 p-1 text-sm flex text-ebony justify-content-between"><span class="">Blanc</span> <span class="">45</span></li>
                        <li class="my-2 p-1 text-sm flex text-ebony justify-content-between"><span class="">Effervescent</span> <span class="">909</span></li>
                        <li class="my-2 p-1 text-sm flex text-ebony justify-content-between"><span class="">Rosé</span> <span class="">78</span></li>
                    </ul>
                </div>
                <div>
                    <ul class="search-criterias"> <span class="inline-block my-3">Region</span> 
                        <li class="my-2 p-1 text-sm flex text-ebony justify-content-between"><span class="">Alsace</span> <span class="">877</span></li>
                        <li class="my-2 p-1 text-sm flex text-ebony justify-content-between"><span class="">Beaujolais</span> <span class="">456</span></li>
                        <li class="my-2 p-1 text-sm flex text-ebony justify-content-between"><span class="">Bordeaux</span> <span class="">91</span></li>
                        <li class="my-2 p-1 text-sm flex text-ebony justify-content-between"><span class="">Bourgogne</span> <span class="">67</span></li>
                        <li class="my-2 p-1 text-sm flex text-ebony justify-content-between"><span class="">Champagne</span> <span class="">78</span></li>
                        <li class="my-2 p-1 text-sm flex text-ebony justify-content-between"><span class="">Corse</span> <span class="">345</span></li>
                        <li class="my-2 p-1 text-sm flex text-ebony justify-content-between"><span class="">Jura</span> <span class="">12</span></li>
                        <li class="my-2 p-1 text-sm flex text-ebony justify-content-between"><span class="">Languedoc-Roussillon</span> <span class="">2</span></li>
                    </ul>
                </div>
                <div>
                    <ul class="search-criterias"> <span class="inline-block my-3">Millésime</span> 
                        <li class="my-2 p-1 text-sm flex text-ebony justify-content-between"><span class="">2021</span> <span class="">234</span></li>
                        <li class="my-2 p-1 text-sm flex text-ebony justify-content-between"><span class="">2020</span> <span class="">45</span></li>
                        <li class="my-2 p-1 text-sm flex text-ebony justify-content-between"><span class="">2019</span> <span class="">909</span></li>
                        <li class="my-2 p-1 text-sm flex text-ebony justify-content-between"><span class="">2018</span> <span class="">78</span></li>
                    </ul>
                </div>
                <div>
                    <ul class="search-criterias"> <span class="inline-block my-3">Type de vin</span> 
                        <li class="my-2 p-1 text-sm flex text-ebony justify-content-between"><span class="">Rouge</span> <span class="">234</span></li>
                        <li class="my-2 p-1 text-sm flex text-ebony justify-content-between"><span class="">Blanc</span> <span class="">45</span></li>
                        <li class="my-2 p-1 text-sm flex text-ebony justify-content-between"><span class="">Effervescent</span> <span class="">909</span></li>
                        <li class="my-2 p-1 text-sm flex text-ebony justify-content-between"><span class="">Rosé</span> <span class="">78</span></li>
                    </ul>
                </div>
            </div>
            <div class="lg:col-9 sm:col-7 flex flex-wrap justify-content-around products">
                <div v-for="wine in getWines" :key="wine.id" class="lg:w-14rem sm:w-10rem px-1 my-3">
                    <Card class="py-2 text-center pointable">
                        <template #header>
                            <div class="p-3 bg-white w-11 border-round-lg"><img alt="user header" :src="wine.image_link" class="lg:h-8rem sm:h-5rem w-auto"></div>
                        </template>
                        <template #title>
                            <span class="text-sm">{{wine.title}}</span>
                        </template>
                        <!--template #content>
                            <span class="text-sm">{{wine.millesime}}</span>
                        </template-->
                        <template #footer>
                            <Button icon="pi pi-shopping-cart" class="darky" label="Ajouter" />
                        </template>
                    </Card>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>

</template>
<script>

import wines from "../store/wines";
export default{
    name:"Search",
    data(){
        return {

        }
    },    
    computed:{
            getWines(){
                return wines;
            }
        }
}
</script>
<style scoped>
    .sidebar{
        border-right: solid 1px #c1c1C199;
        max-height:calc(100vh);
        overflow: scroll;
    }
    .search-criterias{
        list-style-type: none;
    }
    .search-criterias li{
        border-radius:5px;
    }

    .search-criterias li span{
        display: inline-block;
    }
    .search-criterias li:hover{
        background-color: var(--yellow-color);
        cursor:pointer;
    }
    
    
    .products .p-card-content{
        padding: 0;
    }
    .products  .p-card:hover{
        background-color: var(--khaki-light-color);
    }
    .bg-white{
        background-color: white;
    }
</style>