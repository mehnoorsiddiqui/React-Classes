const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
//creating a connection 
const db = mysql.createPool(
    {
        host: 'localhost',
        user:'root',
        password: 'password',
        database: 'cruddb'
    }
)

//to solve the cross-origin issue
app.use(cors());

//
app.use(express.json());

//use whenever we send data from frontend to backend due to json thing we need to use body parser
//It is responsible for parsing the incoming request bodies in a middleware before you handle it
app.use(bodyParser.urlencoded({extended: true}))

//get request to get data from mysql db
app.get("/api/get",(req,res)=> {
    const sqlSelect= "SELECT * FROM movie_review";
    db.query(sqlSelect,(err,result)=>{
    res.send(result);
    })
   
});
//post request to add data to mysql db
app.post("/api/insert",(req,res)=> {
    const movieName = req.body.movieName // movieName after the body is coming from frontend 
    const movieReview = req.body.movieReview
    const sqlInsert= "INSERT INTO movie_review (movieName,movieReview) VALUES (?,?)";
    db.query(sqlInsert,[movieName,movieReview],(err,result)=>{
      console.log(result);
    })
   
});
app.put("/api/update",(req,res)=>{
    const id = req.body.id // movieName after the body is coming from frontend 
    const Review = req.body.movieReview
    const sqlUpdate = "UPDATE movie_review SET movieReview = ? WHERE id = ?";
    db.query(sqlUpdate,[Review,id],(err,result)=>{
       if (err) console.log(err)
    })
})
app.delete("/api/delete/:id",(req,res)=>{
    const ID = req.params.id
    const sqlDelete = "DELETE FROM movie_review WHERE id = ?"
    db.query(sqlDelete,ID,(err,result)=>{
       if (err) {console.log(err)}
    })
})
app.listen(3001,()=>{
    console.log("running on port 3001");
})