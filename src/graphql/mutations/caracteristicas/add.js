import {
    GraphQLNonNull
} from 'graphql'

import Caracteristica from '../../../models/caracteristicas'
import {CaracteristicasType,CaracteristicasInputType} from '../../types/caracteristicas'

export default {
    type:CaracteristicasType,
    args:{
        data:{
            type: new GraphQLNonNull(CaracteristicasInputType)
        }
    },
    resolve(root,params){
        const caracteristica = new Caracteristica(params.data);
        const newCaracteristica = caracteristica.save();
        if (!newCaracteristica) throw Error("Error al crear el servicio");
        return newCaracteristica
    }
}