import {graphql} from 'graphql'
import {setupTest} from './helpers'
import schema from '../graphql'
import User from '../models/users'
import generarToken from '../resolvers/createToken'


describe('Prueba de User',async  () => {
    
    beforeAll(async () => await setupTest());
    it('Probando query sin token deberia ser null',async () => {
        //language=GraphQL
        const query = `
        query {
            me{
                _id
                 nombre
                username
            }
        }
        `;
        const result = await graphql(schema,query,{},{})
            const {data} = result;
            expect(data.me).toBe(null)
        
    })

    it('Probando query de me que deberia ser un usuario',async () => {
        console.log('Iniciando el test 2')
        //language=GraphQL
        const query = `
      
        query{
            me{
                _id,
                nombre
            }
        }
    
    `;
    console.log('Paso const query')

    const user = new User({
        "nombre":"Juanito 2",
        "apellidos":"Perex 2",
        "correo":"dagorik4@gmai.com",
        "fecha_nacimiento":"1994-04-12",
        "password":"elpassword2",
        "username":"asdads",
        "genero":"M",
        "pais":"MX",
        "ubicacion":"EN MI CASITA",
        "rol":"USER"
    })
    const newUser = await user.save();
    const context =  {user:newUser}
    const result = await graphql(schema,query,{},context);
    const {data} = result;
    expect(data.me._id).toBe(newUser._id.toString());
  })  
})


it('Suma de 2 mas 2', () => {
    expect(2+2).toBe(4)
});