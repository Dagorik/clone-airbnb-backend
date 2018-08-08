import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLInt,
    GraphQLNonNull
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