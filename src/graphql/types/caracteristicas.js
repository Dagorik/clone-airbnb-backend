import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLInputObjectType
} from 'graphql'

export const CaracteristicasType = new GraphQLObjectType({
    name:"Caracteristicas",
    description:"Caracterisicas de la propiedad :D",
    fields: () => ({
        _id:{
            type:GraphQLNonNull(GraphQLID)
        },
        nombre:{
            type:GraphQLString
        },
        descripcion:{
            type:GraphQLString
        },
        numero:{
            type:GraphQLInt
        }
    })
})

export const CaracteristicasInputType = new GraphQLInputObjectType({
    name:"addCaracteristicas",
    description:"Mutation para agregar caracteristicas",
    fields: () => ({
        nombre:{
            type:GraphQLString
        },
        descripcion:{
            type:GraphQLString
        },
        numero:{
            type:GraphQLInt
        }
    })
})