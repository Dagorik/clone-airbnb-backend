import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLList,
    GraphQLBoolean
} from 'graphql'

import {UserType} from './users'
import User from '../../models/users'

import {PropiedadesType} from './propiedades'
import Propiedad from '../../models/propiedades'

export const ReservacionesType = new GraphQLObjectType({
    name:"Reservaciones",
    description:"Reservaciones de usuarios con propiedades",
    fields: () => ({
        _id:{
            type:GraphQLNonNull(GraphQLID)
        },
        user:{
            type:UserType,
            resolve(reservacion){
                const {user} = reservacion
                return User.findById(user).exec()
            }
        },
        propiedad:{
            type:PropiedadesType,
            resolve(reservacion){
                const {propiedad} = reservacion
                return Propiedad.findById(propiedad).exec()
            }
        },
        status_pago:{
            type:GraphQLBoolean
        },
        numero_personas:{
            type:GraphQLInt
        },
        status_reservacion:{
            type:GraphQLBoolean
        },
        cargo_extra:{
            type:GraphQLInt
        }
    })
})