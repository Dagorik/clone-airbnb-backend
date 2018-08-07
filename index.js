import express from 'express'
import parser from 'body-parser'
import cors from 'cors';
import mongoose from 'mongoose';


const app = express();
const PORT = process.env.PORT || 3000
const mongoURI = process.env.MONGODB_URI || "mongodb://prueba:Test1234567890@ds259079.mlab.com:59079/cinta-roja"

mongoose.connect(mongoURI,{useNewUrlParser: true});
const db = mongoose.connection;
db.on('error',() => console.log('Error al conectar a la BD'))
    .once('open',() => console.log('Conectado a la BD'))

app.use(parser.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send('Server adss')
});



app.post('/signup',(req,res) => {
    let user = req.body
    User.create(user).then((user) => {
        return res.status(201).json({"message":"Usuario Creado",
            "id":user._id})
    }).catch((err) =>{
        console.log(err);
        return res.json(err);
    })
});


app.listen(PORT,()=>console.log(`Server on ${PORT}`))