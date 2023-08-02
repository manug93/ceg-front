<template>
    <div>
        <Navbar></Navbar>
        <div class="carousel" style="max-height:400px">
            <Carousel :value="items" :numVisible="1" :numScroll="1" orientation="horizontal"  :responsiveOptions="responsiveOptions">
                <template #item="slotProps">
                    <img src="../assets/img/wine1.jpg" >
                    Content {{slotProps.data.name}}
                </template>  
            </Carousel>
        </div>
        <div class="red">
            <div class="flex align-items-center justify-content-center ">
                <p class="font-bold text-3xl">Selection de vins</p>
                
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