import {UserType} from '../../types/users'

export default {
    type:UserType,
    resolve(root,params,context){
        return context.user
    }
}