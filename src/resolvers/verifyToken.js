import User from '../models/users';
import jwt from 'jsonwebtoken';

const secret = 'ejemplodeairbn'
const tokenPrefix = 'JWT'

export const verifyToken = (token) => {
    
    const [prefix,receivedToken] = token.split(' ')
    let user = null
    if(!receivedToken){
        throw new Error('No token')
    }
    if(prefix != tokenPrefix){
        throw new Error('Header Invalido')
    }

    jwt.verify(receivedToken,secret,(err,payload) => {
        if (err) throw new Error('Token invalido')
        console.log(payload)
        user = User.findById(payload.id).exec()
    })

    if(!user) throw new Error('Usuario no existe')
    return user

}