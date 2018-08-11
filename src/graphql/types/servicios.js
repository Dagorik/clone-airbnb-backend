import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLInputObjectType
} from 'graphql'

export const ServiciosType = new GraphQLObjectType({
    name:"Servicios",
    description:"Descripcion de servicios que provee la propiedad :v",
    fields: () => ({
        _id:{
            type:GraphQLNonNull(GraphQLID)
        },
        nombre:{
            type:GraphQLString
        },
        descripcion:{
            type:GraphQLString
        }
    })
})

export const ServiciosInputType = new GraphQLInputObjectType({
    name:"addServicios",
    description:"Mutation para agregar servicios",
    fields: () => ({
        nombre:{
            type:GraphQLString
        },
        descripcion:{
            type:GraphQLString
        }
    })
})