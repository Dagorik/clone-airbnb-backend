import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql'

import Propiedad from '../../../models/propiedades'
import {PropiedadesInputType,PropiedadesType} from '../../types/propiedades'


export default {
    type: PropiedadesType,
    args:{
        id:{
            name:'ID',
            type: new GraphQLNonNull(GraphQLID)
        },
        data:{
            name:'data',
            type: new GraphQLNonNull(PropiedadesInputType)
        }
    },
    resolve(root,params){
        return Propiedad.findByIdAndUpdate(params.id,{$set:{...params.data}},{new:true})
            .then(propiedad => propiedad)
            .catch(erre =>  Error('Error al hacer el update'))
    }
}