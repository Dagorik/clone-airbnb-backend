import {
    GraphQLNonNull
} from 'graphql'

import Reservacion from '../../../models/reservaciones'
import {ReservacionesInputType,ReservacionesType} from '../../types/reservaciones'

export default {
    type:ReservacionesType,
    args:{
        data:{
            type: new GraphQLNonNull(ReservacionesInputType)
        }
    },
    resolve(root,params){
        const reservacion = new Reservacion(params.data);
        const newReservacion = reservacion.save();
        if(!newReservacion) throw Error('Erro al giardar la reservacion')
        return newReservacion
    }
}
