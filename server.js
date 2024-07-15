import express from 'express';
import sqlite3 from 'sqlite3';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';



const app = express();
const port = 3000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const db =  new sqlite3.Database('tacker.db');


app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors()); 


app.get("/api/get_numbers",(req,res) => {
    let array = [];
    console.log("connected")
    db.all("SELECT * FROM 'numbers' WHERE date ==  DATE('now')",[], (err,rows) =>{
        rows.forEach(row =>{
            let obj = {
                firstName : row.first_name,
                lastName : row.last_name,
                left : row.left,
                right : row.right,
                front : row.front,
                back : row.back ,
                total: row.total,
                duration : row.duration
            }
            array.push(obj)
        })
        res.send(array);
    });
});

app.post('/api/insert_user', (req,res) => {
    console.log(req.body)
    const body = req.body
    db.run('INSERT INTO "numbers" ("first_name","last_name","left","right","front","back","duration") VALUES(?,?,?,?,?,?,?)',
        body.firstName,
        body.lastName,
        body.left,
        body.right,
        body.front,
        body.back,
        body.time
    )
})

app.listen(port,() => {
    console.log(`Server is running on http://localhost:${port}`)
})
