import { Address } from "./Address";

export class User{
    
    constructor(public id : number,
        public firstName : string,
        public lastName : string,
        public phone : string,
        public email : string,
        public password : string,
        public address? : Address,
        
        public birthdate? : Date

        ) {}
}
