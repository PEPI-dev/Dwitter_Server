//import mysql from 'mysql2';
import { config } from '../config.js';
import Mongoose from 'mongoose'

export async function connectDB(){
    return Mongoose.connect(config.db.host)
}

export function useVirtualId(schema){
    schema.virtual('id').get(function() {
        return this._id.toString()
    })
    schema.set('toJSON', { virtuals : true})
    schema.set('toObject', { virtuals : true})
}

let db
export function getTweets(){
    return db.collection('tweets')
}
