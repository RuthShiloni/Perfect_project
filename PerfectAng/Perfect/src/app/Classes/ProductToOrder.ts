import { Product } from "./Products";
import { SizePrice } from "./SizePrice";

export class ProductToOrder{
    
    constructor(
        public orderId: number,
        public productId : number ,
        public quantity : number,
        public sizeId : number,
        public size? : SizePrice,
        public product? : Product,
        public id? : number ,
        ) {
           
    }
}