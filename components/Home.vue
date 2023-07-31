<template>
    <div>
        <Navbar></Navbar>
        <div>
            <Carousel :value="items" :numVisible="1" :numScroll="1" orientation="horizontal"  :responsiveOptions="responsiveOptions">
                <template #item="slotProps">
                    <img src="../assets/img/wine1.jpg" >
                    Content {{slotProps.data.name}}
                </template>  
            </Carousel>
        </div> 
    </div>
    
</template>
<script>
    export default{
        name:"Home"
    }
</script>