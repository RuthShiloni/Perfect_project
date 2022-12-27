export class Order{
    constructor(public Id:number,
        public UserId:number,
        public Delivery:string,
        public Date:Date,
        public PickupDate:Date,
        public DeliveryPrice:number,
        public Delivered:boolean
        
       ){}
}



