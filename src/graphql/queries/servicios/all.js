import {
    GraphQLList
} from 'graphql'

import Servicio from '../../../models/servicios'
import {ServiciosType} from '../../types/servicios'

const queryAllServicios = {
    type: new GraphQLList(ServiciosType),
    resolve(){
        const servicios = Servicio.find().exec()
        return servicios
    }
}

export default queryAllServicios;