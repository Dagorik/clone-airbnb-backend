import mongoose from 'mongoose'

process.env.NODE_ENV = 'test'

const config = {
    db:{
        test:'mongodb://prueba:prueba123@ds221242.mlab.com:21242/testing'
    },
    connection:null
}

function connect(){
    return new Promise((resolve,reject) => {

        const options = {
            server:{
                auto_reconnect:true,
                reconnectTries: Number.MAX_VALUE,
                reconnectInterval:1000
            }
        };
        mongoose.connect(config.db.test,options);
        config.connection = mongoose.connection;
        config.connection
            .once('open',resolve)
            .on('error',(e) => {
                console.log(e)
                reject()
            })
            
    });
}


function clearDatabase(){
    return new Promise((resolve,reject) => {
        let cont = 0
        let max = Object.keys(mongoose.connection.collection).length;
        
        for(const i in mongoose.connection.collection){
            mongoose.connection.collection[i].remove(function (){
                cont++;
                if (cont >= max){
                    resolve();
                }
            });
        }
    });
}


export async function setUpTest(){
    await connect()
    await clearDatabase()
}