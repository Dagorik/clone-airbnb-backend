import mongoose from "mongoose";

const Schema = mongoose.Schema

const CaracteristicasSchema = new Schema({
    "nombre":{
        type:String,
        required: true
    },
    "descripcion":{
        type:String,
        required: true
    },
    "numero":{
        type:Number,
        required: true
    }
},{collection:"Caracteristicas",timestamps:true});

export default mongoose.model('Caracteristicas',CaracteristicasSchema);