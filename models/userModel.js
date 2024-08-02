const mongoose = require('mongoose')

const book = new mongoose.Schema({
    book_name : {type :String, default: '',required:true},
    pub_name : {type :String, default: ''},
    book_id : {type :String, default: '',unique:true,required:true},
    book_author : {type :String, default: ''},
    book_genre:{type :String, default: ''}
})
const author = new mongoose.Schema({
    author_name : {type :String, default: ''},
    author_famous_book : {type: mongoose.Schema.Types.ObjectId , ref:'book'}
})
const section = new mongoose.Schema({
    section_id : {type :String, default: '',unique :true},
    section_name : {type :String, default: ''} //humanity
})
const subSection = new mongoose.Schema({ //mechanical
    sub_id : {type :String, default: '',unique :true},
    sub_name :{type :String, default: ''}
})
const publication = new mongoose.Schema({
    book_name : {type :String, default: ''},
    year : {type :Number, default: ''}
})
const subject = new mongoose.Schema({ //FEE,BEE
    subject_id : {type :String, default: ''},
    subject_name : {type :String, default: ''}
})
const book_issue = new mongoose.Schema({
    book_id : {type :String, default: '',unique:true},
    book_name : {type :String, default: ''},
    issue_date : {type :Date , required:true},
    return_date : {type :Date , required:true}
})
module.exports = {
    book : mongoose.model('book',book),
    author : mongoose.model('author',author),
    section : mongoose.model('section',section),
    subSection : mongoose.model('subSection',subSection),
    publication : mongoose.model('publication',publication),
    subject : mongoose.model('subject',subject),
    book_issue : mongoose.model('book_issue',book_issue)
}