export class User{
    
    constructor(public Id : number,
        public FirstName : string,
        public LastName : string,
        public Phone : string,
        public Email : string,
        public Password : string,
        public Birthdate? : Date) {
        
    }
}
