import express from 'express' ; 
import mongoose from 'mongoose' ; 

const app = express() ; 

mongoose.connect('mongodb+srv://yashdhoke1:yax50120@yashdhoke.z5ipbv5.mongodb.net/BlogApplication').then(() => app.listen(3000))
.then( () =>
    console.log('successfully connected to the database and listening to the port 3000!'))
.catch((err) => console.log(err)) ;

