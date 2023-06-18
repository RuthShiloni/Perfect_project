export class ProductToOrder{
    
    constructor(
        public orderId: number,
        public productId : number ,
        public quantity : number,
        public sizeId : number,
        public id? : number) {
           
    }
}