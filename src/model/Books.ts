import {Schema ,model } from 'mongoose'


const BookSchema = new Schema({
   title:{type:String},
   author:{type:String},
   isbn:{type:String}
   
},{
    timestamps:true
})

export default model('Book', BookSchema)