export class Order{
    constructor(
        public id? : number,
        public userId?:number,
        public delivery?:string,
        public date?:Date,
        public pickupDate?:Date,
        public deliveryPrice?:number,
        public delivered?:boolean,
        
       ){}
}



