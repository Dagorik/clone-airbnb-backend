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
        }
    },
    resolve(root,params){
        const deletePropiedad=  Propiedad.findByIdAndRemove(params.id).exec()
        if (!deletePropiedad) throw Error('Error al borrar la propiedad')
        return deletePropiedad
    }
}