import { PersonalProduct } from "./PersonalProduct";
import { ProductToOrder } from "./ProductToOrder";

export class Order{
    constructor(
        public id : number,
        public sumPrice? : number,
        public userId?:number,
        public delivery?:string,
        public date?:Date,
        public pickupDate?:Date,
        public deliveryPrice?:number,
        public delivered?:boolean,
        public personalProducts? : PersonalProduct[],
        public productToOrders? : ProductToOrder[]
        
       ){}
}



