import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ReservacionesSchema = new Schema({
    "user":{
        type:Schema.Types.ObjectId,
        ref:'Users',
        required:true
    },
    "propiedad":{
        type:Schema.Types.ObjectId,
        ref:'Propiedades',
        required:true
    },
    "status_pago":{
        type:Boolean,
        required:true,
        default:false
    },
    "numero_personas":{
        type:Number,
        required:true,
        default:1
    },
    "status_reservacion":{
        type:Boolean,
        required:true,
        default:false
    },
    "cargo_extra":{
        type:Number
    }
},{collection:'Reservaciones',timestamps:true});

export default mongoose.model('Reservaciones',ReservacionesSchema)