
const express = require('express') ;
const cors = require('cors') ;

const app = express() ;
const port = 5000 ;

app.use(cors()) ;

app.get('/api/students' , (req ,res)=>{
    const student = [
        {
            id : 1 ,
            name : 'Suman Bhattarai' ,
            age : 20 ,
            faculty : 'Software Engineering'
        } ,
        {
            id : 2 ,
            name : 'Sandesh Shrestha' ,
            age : 21 ,
            faculty : 'Computer Engineering'
        } ,
        {
            id : 3 ,
            name : 'Sujan Tiwari' ,
            age : 20 ,
            faculty : 'BBA'
        } ,
        {
            id : 4 ,
            name : 'Abc Xyz' ,
            age : 25 ,
            faculty : 'Bsc Nursing'
        }
    ] ;
    res.json(student);
}) ;

app.listen(port , ()=>{
    console.log('Our server is running at port : ' + port) ;
})