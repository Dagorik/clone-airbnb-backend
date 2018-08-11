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
        }
    },
    resolve(root,params){
        const deleteReservacion=  Reservacion.findByIdAndRemove(params.id).exec()
        if (!deleteReservacion) throw Error('Error al borrar la reservacion')
        return deleteReservacion
    }
}