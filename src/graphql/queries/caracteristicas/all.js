import {
    GraphQLList
} from 'graphql'

import Caracteristica from '../../../models/caracteristicas'
import {CaracteristicasType} from '../../types/caracteristicas'

const queryAllCaracteristicas = {
    type: new GraphQLList(CaracteristicasType),
    resolve(){
        const caracteristicas = Caracteristica.find().exec()
        return caracteristicas
    }
}

export default queryAllCaracteristicas;