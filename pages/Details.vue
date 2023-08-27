<template>
    <div>
        <Navbar></Navbar>
        <div class="grid main">
            <div class="sidebar lg:col-6 sm:col-6">
                <div class="flex justify-content-center">
                    <vuePhotoZoomPro type="circle" url="https://www.lilovino.com/491-large_default/champagne-veuve-clicquot-brut-rose.jpg" high-url="https://www.lilovino.com/491-large_default/champagne-veuve-clicquot-brut-rose.jpg"></vuePhotoZoomPro>
                </div>
                
            </div>
            <div class="lg:col-6 sm:col-6 px-3">
                <div class="details-tags inline-block ">
                    <NuxtLink to="/search?q=Champagne"><Chip label="#Champagne"></Chip></NuxtLink>
                    <NuxtLink to="/search?q=Veuve%20Clicquot"><Chip label="#Veuve Clicquot"></Chip></NuxtLink>                    
                </div>
                <p class="ml-2 text-xl"><span>Veuve Clicquot Brut Rosé</span></p>
                <Divider></Divider>
                <div>
                    <p class=" ml-2 text-sm">
                        Le Brut Rosé de la maison Veuve Clicquot est un assemblage de 50 à 60 crus différents. 
                        Sa structure est basée sur le style traditionnel du Brut Carte Jaune, 
                        la référence de la maison Veuve Clicquot. 
                        Une valeur sûre pour les amoureux de la marque. A déguster à l'apéritif
                    </p>
                </div>
                <div>
                    <p class=" ml-2 my-1 text-6xl text-yellow font-bold">
                        XAF 143 099
                    </p>
                    <div>
                        <Dropdown v-model="qte" value="6pcs" :options="qts" optionLabel="name" optionValue="code" placeholder="pack de 6" class="w-3 h-3rem " />
                        <Button label="Ajouter" type="button" icon="pi pi-shopping-cart" class="mr-3 h-3rem p-button-raised darky"></Button>
                    </div>
                    <div class="my-5 details-table">
                        <DataTable :value="details" stripedRows showGridlines  responsiveLayout="scroll" class="p-datatable-sm">
                            <Column field="attribut" :header="false" ></Column>
                            <Column field="valeur" :header="false"></Column>
                        </DataTable>
                    </div>
                    
                </div>               

            </div>
            <div class="col-12">
                <Divider class="my-4" align="center" type="solid">
                        <b class="text-2xl default-font">Voir aussi</b>
                </Divider>
                <div class="flex justify-content-center">
                    <div class="flex flex-wrap px-5 w-8">
                        <div v-for="wine in getWines.slice(0,8)" :key="wine.id" class="lg:w-3 sm:w-6 px-1 my-3">
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
            </div>

        </div>

        <Footer></Footer>
    </div>

</template>
<script>
import wines from "../store/wines";
import vuePhotoZoomPro from 'vue-photo-zoom-pro'
import 'vue-photo-zoom-pro/dist/style/vue-photo-zoom-pro.css'
export default{
    name:"Details",
    components: {
        vuePhotoZoomPro,
    },
    data(){
        return {
            qts:[
                {
                    name:"1 pc",
                    code:"1pc"
                },{
                    name:"pack de 6",
                    code:"6pcs"
                },
            ],
            qte:0,
            details:[            
                        {
                            "attribut": "région",
                            "valeur": "Champagne"
                        },
                        {
                            "attribut": "nom",
                            "valeur": "Champagne Rosé Brut AOC"
                        },
                        {
                            "attribut": "producteur",
                            "valeur": "La Maison du Champagne"
                        },
                        {
                            "attribut": "type",
                            "valeur": "Champagne"
                        },
                        {
                            "attribut": "couleur",
                            "valeur": "Rosé"
                        },
                        {
                            "attribut": "volume",
                            "valeur": "75cl"
                        },

                        {
                            "attribut": "visuel",
                            "valeur": {
                            "couleur": "Rosé-orange avec reflets cuivrés"
                            }
                        },

                        {
                            "attribut": "nez",
                            "valeur": {
                            "arômes": "Arômes de fruits rouges"
                            }
                        },

                        {
                            "attribut": "bouche",
                            "valeur": {
                            "corps": "Bouche ample et gourmande",
                            "goût": "Fruité et fraîcheur en harmonie",
                            "finale": "Finale longue et persistante"
                            }
                        },

                        {
                            "attribut": "accordMetsVins",
                            "valeur": [
                            "Saumon fumé",
                            "Fruits de mer",
                            "Desserts aux fruits rouges", 
                            "Desserts au chocolat"
                            ]
                        },

                        {
                            "attribut" : "températureService",
                            "valeur" : "8°C à 10°C" 
                        },

                        {
                            "attribut": "délaiLivraison",
                            "valeur": "Livraison en 2 à 5 jours ouvrés" 
                        },

                        {
                            "attribut": "origine",
                            "valeur": "Fabriqué en France"
                        }

                        ]

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
    .main{
         padding-top:190px ;
    }
    
    .bg-white{
        background-color: white;
    }
    .details-tags .p-chip{
        font-size: 0.8rem;
        font-family: "MarkPro-Medium";
        background-color: var(--yellow-color);
    }

    
</style>