const express = require('express')
const multer=require("multer");
const cors=require("cors")
const mysql = require('mysql2')
var bodyParser = require('body-parser')
const {diskStorage} = require("multer");
const path=require('path');
const bcrypt=require('bcrypt');
const {hash} = require("bcrypt");
const jwt=require("jsonwebtoken");
const {response} = require("express");
const salt=10;
const port = 3000

const app = express()

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'apwd',
    database: 'riyapola'
})
connection.connect()


app.get('/', (req, res) => {
    res.send('Hello World!')
})

const storage=multer.diskStorage({
    destination:'./upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload=multer({storage:storage})

app.use('/images',express.static('upload/images'))

app.post('/upload',upload.single('vehicle'), (req, res) => {
    res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})

app.post('/addvehicle', (req, res) => {
    connection.query('INSERT INTO VEHICLE(brand,carName,imgName,model,speed,automatic,gps,seatType,price,available,description) VALUES (?,?, ?, ?,?, ?, ?,?, ?, ?,?) ', [req.body.brand,req.body.carName,req.body.imgName,req.body.model,req.body.speed,req.body.automatic,req.body.gps,req.body.seatType,req.body.price,req.body.available,req.body.description,], (err, rows) => {
        if (err) throw err
        res.send(rows)
    })
})

app.get('/getvehicledata', (req, res) => {
    connection.query('SELECT * FROM vehicle', (err, rows) => {
        if (err) throw err
        res.send(rows)
    })
})
app.get('/getuniquevehicledata/:id', (req, res) => {
    connection.query('SELECT * FROM vehicle WHERE id = ?', [req.params.id], (err, rows) => {
        if (err) throw err;
        res.send(rows);
    });
});

app.delete('/removevehicle/:id', (req, res) => {
    connection.query('DELETE  FROM VEHICLE WHERE id=?' ,[req.params.id], (err, rows) => {
        if (err) throw err
        res.send(rows)
    })
})
app.put('/updatevehicle/:id', (req, res) => {
    connection.query('UPDATE VEHICLE SET carName=?,brand=?,model=?,price=?,speed=?,automatic=?,gps=?,seatType=?,description=? WHERE id=?',[req.body.carName,req.body.brand,req.body.model,req.body.price,req.body.speed,req.body.automatic,req.body.gps,req.body.seatType,req.body.description,req.params.id], (err, rows) => {
        if (err) throw err
        res.send(rows)
})})

app.post('/rentcar', (req, res) => {
    connection.query('INSERT INTO BOOKING(car_name,name,email,phone_number ,pickup_location,pickup_date,pickup_time,drop_off_location,drop_off_date,drop_off_time,additional_info) VALUES (?,?, ?, ?,?, ?, ?,?, ?, ?,?) ', [req.body.car_name,req.body.name,req.body.email,req.body.phone_number ,req.body.pickup_location,req.body.pickup_date,req.body.pickup_time,req.body.drop_off_location,req.body.drop_off_date,req.body.drop_off_time,req.body.additional_info], (err, rows) => {
        if (err) throw err
        res.send(rows)
    })
})

app.get('/getrequests', (req, res) => {
    connection.query('SELECT * FROM BOOKING', (err, rows) => {
        if (err) throw err
        res.send(rows)
    })
})
app.delete('/removeRequests/:id', (req, res) => {
    connection.query('DELETE  FROM BOOKING WHERE id=?' ,[req.params.id], (err, rows) => {
        if (err) throw err
        res.send(rows)
    })
})
app.post('/signup', (req, res) => {
    connection.query('SELECT COUNT(*) AS count FROM SIGNUP WHERE email = ?', [req.body.email], (err, result) => {
        if (err) throw err
        if (result[0].count > 0) {
            res.status(400).json({ error: 'Email already exists' });
        } else{
            bcrypt.hash(req.body.password.toString(),salt,(err,hash)=>{
                if(err) throw err
                connection.query('INSERT INTO SIGNUP(username,email,password) VALUES (?, ?,?) ', [req.body.name,req.body.email,hash], (err, rows) => {
                    if (err) throw err
                    res.send(rows)
                })
            })
        }
    })
})


app.post('/login', (req, res) => {
    connection.query('SELECT * FROM SIGNUP WHERE email=?', [req.body.email], (err, data) => {
        if (err) throw err
        if(data.length>0){
            bcrypt.compare(req.body.password.toString(), data[0].password,(err , response)=>{
                if (err) throw err
                if (response){
                    const email=data[0].email;
                    const token=jwt.sign({email},"jwt-secret-key",{expiresIn: '1d'});
                    return res.json({Status:"Sucess",token})
                }else{
                    return res.json({Error:"Password does not match"})
                }
            })
        }else{
            return res.json({Error:"Email is not existing"})
        }
    })
})
app.post('/sendmessage', (req, res) => {
    connection.query('INSERT INTO contact_messages (name,email,message) VALUES ( ?, ?,?) ', [req.body.customer_name,req.body.customer_email,req.body.customer_message], (err, rows) => {
        if (err) throw err
        res.send(rows)
    })
})

app.get('/getmessages', (req, res) => {
    connection.query('SELECT * FROM contact_messages', (err, rows) => {
        if (err) throw err
        res.send(rows)
    })
})

app.delete('/removemesssages/:id', (req, res) => {
    connection.query('DELETE  FROM contact_messages WHERE id=?' ,[req.params.id], (err, rows) => {
        if (err) throw err
        res.send(rows)
    })
})

app.get('/getpopularvehicle', (req, res) => {
    connection.query('SELECT * FROM vehicle LIMIT 6', (err, rows) => {
        if (err) throw err
        res.send(rows)
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})