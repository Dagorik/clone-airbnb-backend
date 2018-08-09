import queries from './queries'
import {
    GraphQLObjectType,
    GraphQLSchema
} from 'graphql'

export default new GraphQLSchema({
    query:new GraphQLObjectType({
        name:'Query',
        fields:queries
    })
})