import mongoose, { Types } from 'mongoose'

const Schema = mongoose.Schema

const PropiedadesSchema = new Schema({
    "nombre":{
        type:String,
        required: true
    },
    "descripcion_corta":{
        type:String,
        required: true
    },
    "descripcion_larga":{
        type:String,
        required: true
    },
    "ubicacion":{
        type:String,
        required: true
    },
    "pais":{
        type:String,
        required: true
    },
    "user":{
        type:Schema.Types.ObjectId,
        ref:'Users',
        required: true
    },
    "tipo":{
        type:Number,
        required: true
    },
    "precio":{
        type:Number,
        required: true
    },
    "calificacion":{
        type:[{
            "comentario":String,
            "estrellas":Number
        }]
    },
    "caracteristicas":[{
        type:Schema.Types.ObjectId,
        ref:'Caracteristicas'
    }],
    "servicios":[{
        type:Schema.Types.ObjectId,
        ref:'Servicios',
        required: true
    }],
    "fotos":[],
    "disponibilidad_inicial":{
        type:Date,
        required: true
    },
    "disponibilidad_final":{
        type:Date,
        required: true
    }
},{collection:'Propiedades',timestamps:true});

export default mongoose.model('Propiedades',PropiedadesSchema)