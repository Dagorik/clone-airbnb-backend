import {
    GraphQLNonNull
} from 'graphql'

import Propiedad from '../../../models/propiedades'
import {PropiedadesType,PropiedadesInputType} from '../../types/propiedades'
import propiedades from '../../../models/propiedades';

export default {
    type:PropiedadesType,
    args:{
        data:{
            type: new GraphQLNonNull(PropiedadesInputType)
        }
    },
    resolve(root,params){
        const propiedad = new Propiedad(params.data);
        const newPropiedad = propiedad.save()
        if (!newPropiedad) throw Error("Error al crear la propiedad en la base de datos :(");
        return newPropiedad
    }
}