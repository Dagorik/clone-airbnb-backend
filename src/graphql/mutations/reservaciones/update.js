import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql'

import Reservacion from '../../../models/reservaciones'
import {ReservacionesInputType,ReservacionesType} from '../../types/reservaciones'

export default {
    type: ReservacionesType,
    args:{
        id:{
            name:'ID',
            type: new GraphQLNonNull(GraphQLID)
        },
        data:{
            name:'data',
            type: new GraphQLNonNull(ReservacionesInputType)
        }
    },
    resolve(root,params){
        //TODO hacer la validacion de las fechas.
        return Reservacion.findByIdAndUpdate(params.id,{$set:{...params.data}},{new:true})
            .then(reservacion => reservacion)
            .catch(erre =>  Error('Error al hacer el update'))
    }
}