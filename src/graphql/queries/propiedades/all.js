import {
    GraphQLList
} from 'graphql'

import Propiedad from '../../../models/propiedades'
import {PropiedadesType} from '../../types/propiedades'

const queryAllPropiedades = {
    type: new GraphQLList(PropiedadesType),
    resolve(){
        const propiedades = Propiedad.find().exec()
        return propiedades
    }
}

export default queryAllPropiedades;