import {GraphQLNonNull,GraphQLID} from 'graphql'

import Reservacion from '../../../models/reservaciones'
import {ReservacionesType} from '../../types/reservaciones'

const querySingleReservacion = {
    type:ReservacionesType,
    args:{
        id:{
            name:'ID',
            type:GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root,params){
        console.log(root)
        const reservacion = Reservacion.findById(params.id).exec()
        return reservacion
    }
}

export default querySingleReservacion;