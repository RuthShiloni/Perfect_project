export class Product{

    constructor(
        public id : number,
        public name : string,
        public details :string,
        public allergens : string,
        public img : string,
        public categId : number,
        public type : string) {   
    }
}