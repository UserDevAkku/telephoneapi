
const express=require("express")
const app=express();
const bodyparser=require('body-parser')
const port =3000;
require('./dataBase/db')
const telephns=require('./models/model')
app.use(express.static('./public'))
app.set("view engine","ejs")

//middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use((req, res, next) => {
    next();
})
//default route
const render=()=>{
app.get('/', (req, res) => {
    res.render('index');
    console.log('rendered successfully');
})
}
render();
//route for posting
app.post('/submit', async (req, res) => {
    try {
    const data=req.body;
    if(data.telephn_no!==""){
   const SavedPhn=await telephns.create(data);
   console.log(SavedPhn);
   res.send('data saved');
    }
    else
    {
    res.send('data is not valid')
    }
    }
    catch(error)
    { res.send('data not saved ')
        res.send('data displayed on terminal screen')
        console.log(error)
    }
});
app.listen(port,()=>{
    console.log("connection stablished");
});

