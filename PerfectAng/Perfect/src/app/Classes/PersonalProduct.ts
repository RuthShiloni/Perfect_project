import { Color } from "./Color";
import { Cream } from "./Cream";
import { Layer } from "./Layer";
import { Shape } from "./Shape";

export class PersonalProduct{
    constructor(
        public ShapeId:number,
        public ColorId1:number,
        public CreamId:number,
        public LayersId:number,
        public Picture:string,
        public Text:string,
        public price:number,
        public quantity :number,
        public userId : number,
        public ColorId2 :number,
        public id : number,
        public shape? : Shape,
        public cream? : Cream , 
        public layers? : Layer,
        public colorId1Navigation? : Color,
        public colorId2Navigation? : Color,
        public orderId ?:number
        
       ){}
}


