import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLInt,
    GraphQLNonNull
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