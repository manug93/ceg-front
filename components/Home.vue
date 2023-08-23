<template>
    <div>
        <Navbar></Navbar>
        <!--div class="carousel mb-5" style="max-height:400px">
            <Carousel :value="items" :numVisible="1" :numScroll="1" orientation="horizontal"  :responsiveOptions="responsiveOptions">
                <template #item="slotProps">
                    <img src="../assets/img/wine1.jpg" >
                    Content {{slotProps.data.name}}
                </template>  
            </Carousel>
        </div-->
        <div class="main">                        
            <div class="grid grid-nogutter surface-section text-800">
                <div class="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
                    <section>
                        <span class="block text-6xl font-bold mb-1">Améliorez la qualité de vos repas</span>
                        <div class="text-6xl text-yellow font-bold mb-3">Et rendez vos évènements inoubliables</div>
                        <p class="mt-0 mb-4 text-700 line-height-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        
                        <Button label="Catalogue" type="button" class="mr-3 p-button-raised darky"></Button>
                        <Button label="Live Demo" type="button" class="p-button-outlined"></Button>
                    </section>
                </div>
                <div class="col-12 md:col-6 overflow-hidden">
                    <img src="../assets/img/hero.jpg" alt="Image" class="md:ml-auto block md:h-full" style="clip-path: polygon(8% 0, 100% 0%, 100% 100%, 0 100%)">
                </div>
            </div>
        </div>
        <div class="ebony flex  justify-content-center p-5">
            <div class="m-2 p-1 w-2">
                <div class="flex align-items-center justify-content-center features"> 
                    <img src="../assets/img/vins.png" class="" alt="">    
                </div>
                <p class="font-bold text-xl text-center mb-0">Une sélection pointue</p>
                <p class="font-bold text-center text-sm mb-0">en direct des domaines et vignerons</p>                
            </div>
            <div class="m-2 p-1 w-2">
                <div class="flex align-items-center justify-content-center features"> 
                    <img src="../assets/img/service-client.png" class="" alt="">    
                </div>
                <p class="font-bold text-xl text-center mb-0">Un service client</p>
                <p class="font-bold text-center text-sm mb-0">à l'écoute comme chez le caviste</p>                
            </div>
            <div class="m-2 p-1 w-2">
                <div class="flex align-items-center justify-content-center features"> 
                    <img src="../assets/img/delivery.png" class="" alt="">    
                </div>
                <p class="font-bold text-xl text-center mb-0">Livraison rapide</p>
                <p class="font-bold text-center text-sm mb-0">avec un emballage sécurisé et garanti</p>                
            </div>
            <div class="m-2 p-1 w-2">
                <div class="flex align-items-center justify-content-center features"> 
                    <img src="../assets/img/gift.png" class="" alt="">    
                </div>
                <p class="font-bold text-xl text-center mb-0">Récompense Client</p>
                <p class="font-bold text-center text-sm mb-0">Nouveau -5% / Cashback fidélité de 2%</p>                
            </div>
       </div>
        <div class="red">
            <div class="flex align-items-center justify-content-center ">
                <p class="font-bold text-3xl mb-0">Selection de vins</p>
                
            </div>
            <div class="flex align-items-center justify-content-center ">
                <p class="">+3000 références au meilleur tarif</p>
                
            </div>
        </div>
        <div class="flex align-items-center folio p-4" >
            <Carousel :value="items" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions">
               
                <template #item="slotProps">
                    <Card class="text-center overriden m-3" data-aos="fade-up"  data-aos-delay="300"  data-aos-duration="1300">
                        <template #header>
                            <img alt="user header" :src="slotProps.data.img">
                        </template>
                        <template #title>
                            <a href="">{{slotProps.data.name}}</a>
                        </template>
                        <template #content>
                            <a href="">{{slotProps.data.description}}</a>
                            <p>{{ slotProps.data.capacity }} {{slotProps.data.capacityunit}}</p>
                            <p> {{slotProps.data.prix}} {{ config.devise }}</p>
                        </template>
                        <template #footer>
                            <Button icon="pi pi-shopping-cart" label="Ajouter" class="darky" />
                        </template>
                    </Card>
                </template>
            </Carousel>         
           
        </div>
        <Divider />
        <div class="grid" data-aos="fade-right" data-aos-delay="300" data-aos-duration="1300">
            <div class="col-4">
                <img src="../assets/img/vin-prix.png" alt="">
            </div>
            <div class="col-7">
                <p class="text-xl text-yellow">Vente de vins - 200 vignerons à prix d'exceptions</p>
                <p>Notre équipe d'experts vous accompagne dans l'achat de vins qu'il soit en provenance de France, d'Europe et du monde entier. Les vins sont sélectionnés et retenus pour leur qualité, leur originalité, leur typicité et nous permettent de vous offrir une vaste gamme adaptée et toujours au meilleur prix. Lilovino.com vous assure un service de qualité, des conseils au choix des vins, pour l'accord avec les mets tout en privilégiant un accompagnement à la mesure de votre événement.</p>
            </div>
        </div>
        <Divider />
        <div class="grid" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1300">           
            <div class="col-7 col-offset-1">
                <p class="text-xl text-yellow">Champagne de qualité au meilleur prix</p>
                <p>Notre gamme de champagne est toute issue des plus grandes maisons de cette région. Des champagne sélectionnés pour leur qualité, leur régularité et leur savoir-faire. Les grands noms de la champagne, associés au monde du luxe, connotent l'excellence, et servent de références dans le milieu de la haute gastronomie. Des grandes maisons de champagne, aux champagnes de vignerons et passant par les champagnes biologiques, nous vous assurons le meilleur tarif avec des prix étudiés pour tous.</p>
            </div>
            <div class="col-4">
                <img src="../assets/img/champagne-prix.png" alt="">
            </div>
        </div>
        <Divider />
        <div class="grid" data-aos="fade-right" data-aos-delay="300" data-aos-duration="1300">
            <div class="col-4">
                <img src="../assets/img/spritueux-prix.png" alt="">
            </div>
            <div class="col-7">
                <p class="text-xl text-yellow">Sélection Spiritueux</p>
                <p>Les meilleurs spiritueux : whiskies, Vodkas, Gins, Cognacs, Rhums, Liqueurs, Eaux-de-vie sont disponibles sur Lilovino.com. Simple amateur ou connaisseur, partez à la découverte de nouvelles saveurs aux 4 coins du monde. Notre catalogue dispose d'un grand nombre de marques et distilleries internationales de whiskies et spiritueux.</p>
            </div>
        </div>
        <Footer></Footer>
    </div>
    
</template>
<script>
    export default{
        name:"Home",
        data(){
            return{
                config:{
                    devise:"XAF",
                    lang:"fr"
                },
                items:[
                    {
                        name:"Château Larruau - 2019",
                        img:"./img/vin1.jpg",
                        description:"Vin Meursault ",
                        year:"2017",
                        capacity:"75",
                        capacityunit:"cl",
                        prix:"40000"
                    },
                    {
                        name:"Château Roubine - La Vie en Rose - 2022",
                        img:"./img/vin2.jpg",
                        description:"Vin Margaux ",
                        year:"2017",
                        capacity:"75",
                        capacityunit:"cl",
                        prix:"30000"
                    },
                    {
                        name:"Château Labégorce - Zédé de Labégorce - 2017",
                        img:"./img/vin3.jpg",
                        description:"Vin Pauillac ",
                        year:"2017",
                        capacity:"75",
                        capacityunit:"cl",
                        prix:"18500"
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
    .features > img{
        height: 56px;
    }
    .folio .p-card img{
        max-height: 200px;
        width: auto;
        margin: auto;
    }
    .folio .p-card-header{
        display: flex;
        align-items: center;
        justify-content: center;
        padding:3rem;
    }
    .folio a:hover{
        color: var(--yellow-color);
    }
    .folio .p-card .p-card-title{
        min-height:100px;
    }
    .folio .p-card img:hover{
        cursor: pointer;
        transform: scale(2);
        transition: .5s ease-in-out;
    }
    
</style>