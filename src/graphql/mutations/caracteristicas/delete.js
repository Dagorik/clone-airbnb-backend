import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql'

import Caracteristica from '../../../models/caracteristicas'
import {CaracteristicasType,CaracteristicasInputType} from '../../types/caracteristicas'

export default {
    type: CaracteristicasType,
    args:{
        id:{
            name:'ID',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root,params){
        const deleteCaracteristica =  Caracteristica.findByIdAndRemove(params.id).exec()
        if (!deleteCaracteristica) throw Error('Error al borrar la caracteristica')
        return deleteCaracteristica
    }
}