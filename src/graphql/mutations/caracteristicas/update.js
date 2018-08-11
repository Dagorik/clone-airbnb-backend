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
        },
        data:{
            name:'data',
            type: new GraphQLNonNull(CaracteristicasInputType)
        }
    },
    resolve(root,params){
        return Caracteristica.findByIdAndUpdate(params.id,{$set:{...params.data}},{new:true})
            .then(caracteristica => caracteristica)
            .catch(erre =>  Error('Error al hacer el update'))
    }
}