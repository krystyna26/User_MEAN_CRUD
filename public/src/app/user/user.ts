export class User {
    constructor(
        // public _id: number = Math.floor(Math.random()*100),
        public _id: String = "",
        public first_name: string = "",
        public last_name: String = "",
        public email: String = "",
        public editable: boolean = false,
    ){}
}
