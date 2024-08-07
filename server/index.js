import express from 'express'
import mongoose, { Mongoose } from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

import { postSignup, postLogin } from './contollers/user.js';
import { postbook, getbooks, deletebook } from './contollers/transaction.js';

//Connect to mogoDB
const connectDB = async () => {
    const connect = await mongoose.connect(process.env.MONGO_URI,)
    if(connect){
        console.log('MongoDB connected')
    }
};
connectDB();

app.get('/', (req, res)=>{
    res.json({
        message: 'Welcome to expense tracker'
    })
})

//API for Sign Up
app.post('/signup', postSignup )

//API for Log In
app.post('/login', postLogin)

//API to add books 
app.post('/book', postbook)
app.get('/books', getbooks)
app.delete('/book/:id', deletebook)

const PORT = process.env.PPRT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})