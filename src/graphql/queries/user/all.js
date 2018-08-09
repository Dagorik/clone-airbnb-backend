import {
    GraphQLList
} from 'graphql'

import User from '../../../models/users'
import {UserType} from '../../types/users'

const queryAllUsers = {
    type: new GraphQLList(UserType),
    resolve(){
        const users = User.find().exec()
        if (!users) throw new Error('Error al traer los usuarios de la base de datos')
        return users
    }
}

export default queryAllUsers;