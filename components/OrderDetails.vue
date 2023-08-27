<template>
    <div>
        <div class="my-5">
                        <DataTable :value="getShopList" stripedRows showGridlines  responsiveLayout="scroll" class="p-datatable-sm default-font">
                            <Column field="name" header="Name" >
                                <template #body="slotProps">
                                    <div class="flex justify-content-center"><img :src="slotProps.data.url" :alt="slotProps.data.name" class="product-image h-4rem" /></div>
                                </template>
                            </Column>
                            <Column field="name" header="Name" >
                                <template #body="slotProps">
                                    <div class="flex justify-content-center"><span class="default-font" >{{ slotProps.data.name }}</span></div>
                                </template>
                            </Column>
                            <Column field="price" header="Unit Price"></Column>
                            <Column field="qty" header="Quantity"></Column>
                            <Column field="totalPrice" header="Total Price"></Column>
                            <ColumnGroup type="footer">
                                <Row>
                                    <Column footer="Total" :colspan="4" :footerStyle="{'text-align':'right'}"/>
                                    <Column :footer="totalPrice" />
                                </Row>
                            </ColumnGroup>
                        </DataTable>
            </div> 
            <div class="grid grid-nogutter justify-content-between">
                <i></i>
                <Button label="Next" @click="nextPage()" icon="pi pi-angle-right" iconPos="right" />
            </div>
        </div>
</template>
<script>

import wines from "../store/wines";
import {Cart,CartItem} from "../store/tools";
    export default{
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
            nextPage(){
                this.$emit('nextPage', {formData: {card: this.getCard}, pageIndex: 0});
            }
        }

    }
</script>