import { Product } from "./Products";
import { SizePrice } from "./SizePrice";

export class ShoppingCart{
    
    constructor(
        public userId : number,
        public idSize : number,
        public productId : number,
        public quantity : number,  
        public idSizeNavigation : SizePrice , 
        public product : Product,
        public id : number ) {

    }
}