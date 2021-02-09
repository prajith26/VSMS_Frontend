export class ChatModel{
    constructor(
        public _id: string,
        public user_email: string,
        public msg_user: string,
        public msg_admin: string,
        public msg_date: Date
    ){}
}