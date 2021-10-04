const config = require('../configs/database');
const mysql = require('mysql');
const pool = mysql.createPool(config);
const request= require('request');

pool.on('error',(err)=> {
    console.error(err);
});


module.exports ={
    // acces open api + insert db mysql acces date
    addacces2(req,res){
        const url = 'https://www.omdbapi.com/?apikey=a368ddf3&s=Batman'

        let data2 = {
            ID        : 1,  
            dateacces : Date.now
        }

        request({ url: url, json:true},(error,response)=>{
            var data = response.body
            pool.getConnection(function(err, connection) {
                if (err) throw err;
                connection.query(
                    `
                    INSERT INTO accessdata SET ?;
                    `
                , [data2],
                connection.release());
            })
            res.send({ 
                    success: true, 
                    message: 'menemukan data dan insert data for date acces',
                    data   : data,
            });
        })
    }
    
}