export class Cart{
    constructor(items=[]){
        this.items=items;
    }
    get totalPrice(){
        return this.calcPrice();
    }
    addItem(item) {
        this.items.push(item);
    }
    calcPrice(){
        if(this.items.length>0){
            return this.items.reduce((p,i)=>p+i.price,0);
        }
        return 0;
    }
}
export class CartItem{
    constructor(name="",qty=0,url="",price=0){
        this.name=name;
        this.qty=qty;
        this.url=url;
        this.price=price;
    }
    get totalPrice(){
        return this.calcPrice();
    }
    calcPrice(){
        return this.price*this.qty;
    }

}