export class User {
    constructor(
        public id?: number,
        public name?: string,
        public email?: string,
        public password?: string,
        public gender?: string,
        public dob?: Date,
        public hobbies?: Array<string>,
    ) { }
}
