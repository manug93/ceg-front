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
        <div>                        
            <div class="grid grid-nogutter surface-section text-800">
                <div class="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
                    <section>
                        <span class="block text-6xl font-bold mb-1">Améliorez la qualité de vos repas</span>
                        <div class="text-6xl text-primary font-bold mb-3">Et rendez vos évènements inoubliables</div>
                        <p class="mt-0 mb-4 text-700 line-height-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        
                        <Button label="Learn More" type="button" class="mr-3 p-button-raised dark-blue"></Button>
                        <Button label="Live Demo" type="button" class="p-button-outlined"></Button>
                    </section>
                </div>
                <div class="col-12 md:col-6 overflow-hidden">
                    <img src="../assets/img/hero.jpg" alt="Image" class="md:ml-auto block md:h-full" style="clip-path: polygon(8% 0, 100% 0%, 100% 100%, 0 100%)">
                </div>
            </div>
        </div>
        <div class="dark-blue flex  justify-content-center p-5">
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
    </div>
    
</template>
<script>
    export default{
        name:"Home",
        data(){
            return{
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
    .features > img{
        height: 56px;
    }
</style>