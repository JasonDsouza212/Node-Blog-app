const express=require("express");
const morgan=require('morgan');
const mongoose=require('mongoose');

const blogRouts=require("./routes/blogroutes")



const  _  = require("lodash");
const { result } = require("lodash");
const app=express();
const dbURI = 'mongodb+srv://jason:9353231833@nodetuts.enksg.mongodb.net/Node?retryWrites=true&w=majority';
mongoose.connect(dbURI,{ useNewUrlParser: true,useUnifiedTopology: true })
.then((result)=>{
    app.listen(3000);
})
.catch((err)=>{
    console.log(err);
})

app.set('view engine','ejs');



app.use(express.static('public'));
app.use(express.urlencoded({extended:true}))
app.use(morgan('dev'));


app.get('/',(req,res)=>{
    res.redirect('/blogs');
})
app.get('/about',(req,res)=>{
    res.render('about',{title:'about'});
})


app.use(blogRouts);


app.use((req,res)=>{
    res.status(404).render('404',{title:'404'});
})