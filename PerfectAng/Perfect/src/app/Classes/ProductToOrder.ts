export class ProductToOrder{
    
    constructor(public Id : number,
        public OrderId : number,
        public ProductId : number ,
        public Quantity : number,
        public SizeId : number) {
           
    }
}