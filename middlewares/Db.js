const mongoose = require('mongoose');
const username = 'amandeep101003';
const password = 'aman1001';
const url =`mongodb+srv://${username}:${password}@cluster0.rlqapzu.mongodb.net/Library?retryWrites=true&w=majority&appName=Cluster0` ;

const dbConnect = async()=>{ 
    try{
        const data = await mongoose.connect(url)
        // console.log('Db Connected ',data)
    }catch(err){
        console.log(err);
    }
}

module.exports = dbConnect;