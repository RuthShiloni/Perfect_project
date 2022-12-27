export class PersonalProduct{
    constructor(public Id:number,
        public  OrderId:number,
        public  ShapeId:number,
        public  ColorId1:number,
        public CreamId:number,
        public LayersId:number,
        public  Pictur:string,
        public  Text:string,
        public  Price:number,
        public Quantity ?:number,
        public ColorId2 ?:number,
       ){}
}


