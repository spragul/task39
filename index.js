const express = require('express')
const fs = require('fs')
const path = require('path');
//path
const dirpath = path.join(__dirname, "timestamps");

const app = express();
app.use(express.static('timestamps'));

app.get('/', (req, res) => {
    res.send("hai display the data success")
})
app.get('/static', (req, res) => {
    let time = new Date();
    let deteString = time.toUTCString().slice(0, -3);
    let content = `current time and date :${deteString}`
    fs.writeFileSync(`${dirpath}/date-time.txt`, content, (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log('file created')
        }
    })
    res.sendFile(path.join(__dirname, "timestamps/date-time.txt"))
})


app.listen(9000)