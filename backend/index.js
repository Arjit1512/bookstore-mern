import express, { request } from 'express';

import {PORT,mongoDBURL} from "./config.js";
import mongoose from 'mongoose';
import { Book } from './models/bookModel.js';
import booksRoute from './routes/booksRoute.js'
import cors from 'cors';

const app=express();
app.use(express.json());

app.use(cors(
    {
        origin:["http://localhost:5555",
    "https://bookstore-mern-backend.onrender.com"]
    }
)); //*this should be placed exactly below the app.use(express.json()) only....SPENT 3HRS SPOTTING THIS ERROR

app.use(cors({
        origin:["http://localhost:5555",
    "https://bookstore-mern-backend.onrender.com"]
    })); //*this should be placed exactly below the app.use(express.json()) only....SPENT 3HRS SPOTTING THIS ERROR

app.get('/', (req,res) => {
    res.send("Welcome to mern stack tutorial");
})

app.use('/books',booksRoute);

//THE BELOW COMMENTED CODE IS FOR: POSTMAN


// //route to save a new book
// app.post("/books",async(req,res) => {
//    try{
//       if(!req.body.title || !req.body.author || !req.body.publishYear){
//        return res.send({message: 'Please enter all the required fields:title,author,publishYear'});
//       }

//       const newBook = {
//         title: req.body.title,
//         author: req.body.author,
//         publishYear: req.body.publishYear,
//       }

//       const book = await Book.create(newBook);
//       return res.send(book);
//    }
//    catch(error){
//     console.log(error.message);
//     res.send({message:error.message});
//    }
// });

// //route to get all books from database
// app.get("/books",async(req,res) => {
//     try{
       
//        const books = await Book.find({});
//        return res.json({
//         count:books.length,
//         data:books,
//        });
//     }
//     catch(error){
//      console.log(error.message);
//      res.send({message:error.message});
//     }
//  });
 
// //route to get one book from database by ID
// app.get("/books/:id",async(req,res) => {
//     try{
//        const {id} = req.params;
//        const book = await Book.findById(id);
//        return res.json(book);
//     }
//     catch(error){
//      console.log(error.message);
//      res.send({message:error.message});
//     }
//  });

// //route to update a book
// app.put('/books/:id',async(req,res) => {
//     try{
//         if(!req.body.title || !req.body.author || !req.body.publishYear){
//               return res.send({message:'Please enter all the required fields:title,author,publishYear'});
//         }
//         const {id} = req.params;
//         const result = await Book.findByIdAndUpdate(id,req.body);

//         if(!result)
//         return res.send({message:'Book not found'});

//         return res.send({message: 'Book updated successfully'});
//     }
//     catch(error){
//         console.log(error);
//         res.send({message:error.message});
//     }
// })

// //route to delete a book
// app.delete('/books/:id',async(req,res) => {
//     try{
//         const {id} = req.params;
//         const result = await Book.findByIdAndDelete(id);

//         if(!result)
//         return res.send({message:'Book not found'});

//         return res.send({message: 'Book deleted successfully'});
//     }
//     catch(error){
//         console.log(error);
//         res.send({message:error.message});
//     }
// })

//mongodb
mongoose.connect(mongoDBURL)
.then( () => {
    console.log('App connected to database');
    app.listen(PORT, () => {
        console.log(`App is listening to port: ${PORT}`);
    })    
})
.catch( (error) => {
    console.log(error);
})
