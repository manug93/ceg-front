<template>
    <div>
        <Navbar></Navbar>
        <div class="grid main">
            <div class="sidebar lg:col-3 sm:col-3">
                <div class="flex justify-content-center  cgu"> 
                    <div class="mx-2 ">
                        <p class="text-lg my-0 text-center border-round-xl py-4 ebony font-bold">Conditions générales d'achat</p>
                        <div class="mx-2">                        
                            <!--Les présentes conditions générales régissent les ventes de vin par la société NOM entreprise, société d'import-export de vin basée à VILLE.-->

                            <Panel header="Article 1 - Commandes" :collapsed="true" :toggleable="true" class="my-2">
                            Pour passer commande, vous devez être majeur et résider en France métropolitaine. Les commandes sont validées lorsque le paiement est accepté. La vente est considérée comme définitive qu’après encaissement effectif du prix.

                            </Panel> 
                            <Panel header="Article 2 - Prix" :collapsed="true" :toggleable="true" class="my-2">
                            Les prix sont indiqués en euros toutes taxes comprises (TTC), sauf indication contraire. Ils ne comprennent pas les frais de livraison qui sont facturés en supplément. En cas de commande vers un pays de l'UE, vous êtes l'importateur du ou des produits concernés. Des droits de douane ou autres taxes locales ou droits d'importation sont susceptibles d'être exigibles. Ces droits et sommes ne sont pas du ressort du vendeur et sont à votre charge.

                            </Panel> 
                            <Panel header="Article 3 - Paiement" :collapsed="true" :toggleable="true" class="my-2">
                            Le paiement s’effectue par carte bancaire. La transaction est immédiatement débitée sur votre compte bancaire après vérification des informations. Le paiement doit être reçu par l’entreprise pour que la commande soit validée.

                            </Panel> 
                            <Panel header="Article 4 – Livraison" :collapsed="true" :toggleable="true" class="my-2">
                            Les produits sont livrés à l’adresse que vous avez indiquée au moment de la commande. La livraison n'est faite qu'après confirmation du paiement par l'organisme bancaire. Les délais de livraison sont donnés à titre indicatif. Aucun retard ou erreur de livraison ne pourra donner lieu à pénalités ou dommages et intérêts.

                            En cas de retard d’expédition, un mail vous sera adressé pour vous informer d’une éventuelle conséquence sur la date de livraison.

                            </Panel> 
                            <Panel header="Article 5 – Rétractation" :collapsed="true" :toggleable="true" class="my-2">
                            Conformément à l’article L.121-20 du Code de la Consommation, vous disposez d'un délai de rétractation de 14 jours à compter de la réception de vos produits pour exercer votre droit de rétraction. Les retours sont à effectuer dans leur état d'origine. Les frais de retour sont à votre charge.

                            </Panel> 
                            <Panel header="Article 6 – Responsabilité" :collapsed="true" :toggleable="true" class="my-2">
                            Les vins proposés à la vente par notre site respectent la législation française en vigueur. La responsabilité de notre société ne saurait être engagée en cas de non-respect de la législation du pays dans lequel la commande est livrée. Il vous appartient de vérifier auprès des autorités locales les possibilités d'importation ou d'utilisation des produits que vous envisagez de commander.

                            </Panel> 
                            <Panel header="Article 7 – Propriété intellectuelle" :collapsed="true" :toggleable="true" class="my-2">
                            Tous les éléments du site de la société NOM sont et restent la propriété intellectuelle et exclusive de la société.

                            </Panel> 
                            <Panel header="Article 8 - Données personnelles" :collapsed="true" :toggleable="true" class="my-2">
                            Les données personnelles collectées font l’objet d’un traitement informatique. Elles sont utilisées par le vendeur pour le traitement de la commande et sont également susceptibles d’être transmises aux partenaires du vendeur chargés de l’exécution et du paiement des commandes.

                            </Panel> 
                            <Panel header="Article 9 - Droit applicable et juridiction compétente" :collapsed="true" :toggleable="true" class="my-2">
                            Tout litige relatif à l'application des présentes conditions générales est soumis au droit français. En cas de litige, les tribunaux français seront seuls compétents.

                            </Panel>
                
                        </div>
                    </div>                   
                      
            
                </div>
                
            </div>
            <div class="lg:col-9 sm:col-9 "> 
                <div class="formNavigtor">
                    <Steps :model="items" :readonly="true"  style="margin-bottom: 1rem" />                       
                       <keep-alive><AddressForm :formData="formObject" @prevPage="prevPage($event)" @nextPage="nextPage($event)" @complete="complete"></AddressForm></keep-alive> 
                    
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
import wines from "../../store/wines";
import {Cart,CartItem} from "../../store/tools";
import vuePhotoZoomPro from 'vue-photo-zoom-pro'
import 'vue-photo-zoom-pro/dist/style/vue-photo-zoom-pro.css'
export default{
    name:"Address",
    components: {
        vuePhotoZoomPro,
    },
    data(){
        return {
            
        }
    },    
    computed:{
            getWines(){
                return wines;
            },
            getShopList(){
                let list = wines.slice(0,5);
                let shopList=[];
                list.forEach(el=>shopList.push(new CartItem(el.title,3,el.image_link,parseInt(Math.random()*50000))));
                return shopList;
            },
            totalPrice(){
                return this.getShopList.reduce((sum,item)=>sum+item.totalPrice,0);
            },
            getCart(){
                return new Cart(this.shopList);
            }

    },
    methods:{
            nextPage(event) {
                this.formObject = { ...this.formObject, ...event.formData };                
                this.$router.push(this.items[event.pageIndex + 1].to);
            },
            prevPage(event) {
                this.$router.push(this.items[event.pageIndex - 1].to);
            },
            complete() {
                this.$toast.add({severity:'success', summary:'Order submitted', detail: 'Dear, ' + this.formObject.firstname + ' ' + this.formObject.lastname + ' your order completed.'});
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
    .product-image{
        
    }

    
</style>