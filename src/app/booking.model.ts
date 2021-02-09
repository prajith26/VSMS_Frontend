export class BookingModel{
    constructor(
        public _id: string,
        public user_email: String,
        public book_date : String,
        public book_kilometer: String,
        public book_vehicle: String,
        public book_vehicleNo: String,
        public bookservice_oilFilter: boolean,
        public bookservice_lubrication: boolean,
        public bookservice_brakes: boolean,
        public bookservice_engine: boolean,
        public bookservice_plug: boolean,
        public bookservice_battery: boolean,
        public bookservice_others: String,
        public booking_status:boolean,
        public booking_admin: string,
        public booking_completion:boolean,
        public booking_amount: string,
        public booking_reject: Boolean
    ){}
}