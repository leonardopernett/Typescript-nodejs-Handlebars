import {connect} from 'mongoose';
import {mongodb} from './key'

export function connection(){
    connect(mongodb.URI,{
        useNewUrlParser: true ,
        useUnifiedTopology: true
    })
    .then(db =>console.log("db is connected"))
    .catch(err=>console.log(err))
}

