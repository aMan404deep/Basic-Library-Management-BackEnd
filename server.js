const express = require('express')
const app = express(); //function variable is made
const PORT = 5000;
app.use(express.json())
const dbConnect = require('./middlewares/Db');
const usercontroller = require('./controllers/userController')
dbConnect();

app.get('/',(req,res) => {
    res.send('Hello Library')
})

app.get('/read',usercontroller.getBook)
app.get('/read_author',usercontroller.getAuthor)
app.get('/read_pub',usercontroller.getPub)

//post API : 

app.post('/entry',usercontroller.Entry)
app.post('/entry_author',usercontroller.EntryAuthor)
app.post('/entry_pub',usercontroller.EntryPub)
app.post('/update/:_id',usercontroller.updateBook)
app.post('/update_author/:_id',usercontroller.updateAuthor)
app.post('/update_pub/:_id',usercontroller.updatePub)
app.post('/delete/:_id',usercontroller.deleteBook)
app.post('/delete_author/:_id',usercontroller.deleteAuthor)
app.post('/delete_pub/:_id',usercontroller.deletePub)

app.listen(5000, ()=>{
    console.log(`Server started on ${PORT}`);
})

 // kabhi apne puure file ko asynch mt bnana