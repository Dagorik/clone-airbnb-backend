import jwt from 'jsonwebtoken'
import User from '../models/users'

const secret = 'ejemplodeairbn'
const expiresIn = '1d'

export const createToken = (username,password) => {

    if (!username || !password){
        return false
    }

    const compare = new Promise((resolve,reject) => {
        User.findOne({'username':username})
            .then(user => {
                console.log(user)
                if (!user) reject(false)
                user.comparePassword(password,(err,isMatch) =>{
                    console.log(isMatch)
                    if (isMatch){
                        let payload = {
                            username:user.username,
                            id:user._id
                        }
                        const token = jwt.sign(payload,secret,{expiresIn})
                        resolve(token)
                    }else{
                        reject(false)
                    }
                })
            })
            .catch(err => false)
    });

    return compare

}