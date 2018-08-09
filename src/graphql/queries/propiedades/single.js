import {GraphQLNonNull,GraphQLID} from 'graphql'

import Propiedad from '../../../models/propiedades'
import {PropiedadesType} from '../../types/propiedades'

const querySinglePropiedad = {
    type:PropiedadesType,
    args:{
        id:{
            name:'ID',
            type:GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root,params){
        const propiedad = Propiedad.findById(params.id).exec()
        return propiedad
    }
}

export default querySinglePropiedad;