<template>
    <div class="footer ">
        <div class="flex  justify-content-center yellow p-5">
            <div>
                <p class="text-3xl">S'inscrire a notre newsletter</p>
                <div class="">
                    <div class="p-inputgroup">
                        <InputText placeholder="email@domain.com"/>
                        <Button icon="pi pi-envelope" class="red"/>
                    </div>
                </div>
               
            </div>
            <div class="mx-5">
                <ul><p class="text-3xl">Liens externes</p>
                    <li>Regions</li>
                    <li>Fourisseurs</li>
                    <li>F.A.Q</li>
                </ul>
            </div>
            <div>
                <p class="text-3xl">Contactez nous</p>
                <p class="text-sm">Yaoundé - Ekoumdoum </p>
                <p class="text-sm">Contact :  +237 666 888 000</p>
                <div class="my-2 text-xl">
                    <a href=""><i class="pi pi-facebook mx-1" style="font-size: 2rem"></i></a> 
                    <a href=""><i class="pi pi-youtube mx-1" style="font-size: 2rem"></i></a> 
                    <a href=""><i class="pi pi-instagram mx-1" style="font-size: 2rem"></i></a> 
                </div>
            </div>
       </div> 
       <div class="flex align-items-center justify-content-center banner yellow"><span>&copy ceg-sarl 2023</span></div>
        
    </div>
</template>
<script>    
export default {
    name:"Footer",
    
}
</script>
<style>
    .footer ul{
        list-style-type: none;
        padding: 0;
        margin: 0;
    }
    .p-inputtext{
        border:none;
    }
    .p-inputtext:enabled:hover,.p-inputtext:enabled:focus{
        border:none !important;
        box-shadow: 0 0 5px rgba(255,255,255,0.6);
    }
    .p-inputtext{

    }
</style>