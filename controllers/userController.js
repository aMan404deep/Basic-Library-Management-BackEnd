const express = require('express');
const {book,author,publication} = require('../models/userModel')

const Entry = async (req,res) =>{
    try{
        const createBook = req.body;
        console.log(createBook);
        if(!createBook.book_name || !createBook.book_id){
            console.log("Provide data");
            return res.send('Provide data')
        }
        const data = await book.create(createBook);
        res.json({
            status :200,
            message :'Entry successfull',
            data: book,
            db: data
        });
    }catch(err){
        res.send(err);
    }
}
const EntryAuthor = async (req,res) =>{ //Author
    try{
        const createAuthor = req.body;
        console.log(createAuthor);
        if(!createAuthor.author_name){
            console.log("Provide data");
            return res.send('Provide data')
        }
        const data = await author.create(createAuthor);
        res.json({
            status :200,
            message :'Entry successfull',
            data: author,
            db: data
        });
    }catch(err){
        res.send(err);
    }
}
const EntryPub = async (req,res) =>{ //publication
    try{
        const createPub = req.body;
        console.log(createPub);
        if(!createAuthor.book_name || !createAuthor.year){
            console.log("Provide data");
            return res.send('Provide data')
        }
        const data = await publication.create(createPub);
        res.json({
            status :200,
            message :'Entry successfull',
            data: publication,
            db: data
        });
    }catch(err){
        res.send(err);
    }
}

const getBook = async (req,res)=>{
    try{
        const getBook = await book.find();
        res.json({
            status :200,
            message :'book Found',
            data: getBook
        })
    }catch(err){
        res.send(err);
    }
}
const getAuthor = async (req,res)=>{
    try{
        const getAuthor = await author.find();
        res.json({
            status :200,
            message :'author Found',
            data: getAuthor
        })
    }catch(err){
        res.send(err);
    }
}
const getPub = async (req,res)=>{
    try{
        const getPub = await publication.find();
        res.json({
            status :200,
            message :'publication Found',
            data: getPub
        })
    }catch(err){
        res.send(err);
    }
}
const updateBook = async (req,res) => {
    try{    
        const id = req.params._id;
        const inputBook = req.body;
        const updateBook = await user.findByIdAndUpdate(id,inputBook,{
            new:true
        })
        res.json({
            status :200,
            message :'book Updated',
            data: updateBook
        })
    }catch(err){
        res.send(err);
    }
}
const updateAuthor = async (req,res) => {
    try{    
        const id = req.params._id;
        const inputAuthor = req.body;
        const updateAuthor = await user.findByIdAndUpdate(id,inputAuthor,{
            new:true
        })
        res.json({
            status :200,
            message :'author Updated',
            data: updateAuthor
        })
    }catch(err){
        res.send(err);
    }
}
const updatePub = async (req,res) => {
    try{    
        const id = req.params._id;
        const inputPub = req.body;
        const updatePub = await user.findByIdAndUpdate(id,inputPub,{
            new:true
        })
        res.json({
            status :200,
            message :'publication Updated',
            data: updatePub
        })
    }catch(err){
        res.send(err);
    }
}
const deleteBook = async (req,res) => {
    try{    
        const id = req.params._id;
        const deleteData = await user.findByIdAndDelete(id)
        res.json({
            status :200,
            message :'Book Deleted',
            data: deleteData
        })
    }catch(err){
        res.send(err);
    }
}
const deleteAuthor = async (req,res) => {
    try{    
        const id = req.params._id;
        const deleteData = await user.findByIdAndDelete(id)
        res.json({
            status :200,
            message :'Author Deleted',
            data: deleteData
        })
    }catch(err){
        res.send(err);
    }
}
const deletePub = async (req,res) => {
    try{    
        const id = req.params._id;
        const deleteData = await user.findByIdAndDelete(id)
        res.json({
            status :200,
            message :'publication Deleted',
            data: deleteData
        })
    }catch(err){
        res.send(err);
    }
}
module.exports = {Entry,EntryAuthor,EntryPub,getBook,getAuthor,getPub,updateBook,updateAuthor,updatePub,deleteBook,deleteAuthor,deletePub}