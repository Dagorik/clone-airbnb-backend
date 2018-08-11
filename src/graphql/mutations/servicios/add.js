import {
    GraphQLNonNull
} from 'graphql'

import Servicio from '../../../models/servicios'
import {ServiciosType,ServiciosInputType} from '../../types/servicios'

export default {
    type:ServiciosType,
    args:{
        data:{
            type: new GraphQLNonNull(ServiciosInputType)
        }
    },
    resolve(root,params){
        const servicio = new Servicio(params.data);
        const newServicio = servicio.save();
        if (!newServicio) throw Error("Error al crear el servicio");
        return newServicio
    }
}