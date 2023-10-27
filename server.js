const express = require('express')
const app = express()
const port = 4000

//body parser for post method
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended:false}))
app.use(bodyParser.json());

//http listeners for the given port number

app.get('/', (req, res) => {
    res.send('Hello World!');//return message
})

app.get('/whatever', (req, res) => {
    res.send("Good Bye");
})

app.get('/dataRep', (req, res) => {
    res.send("Welcome to data representation and queerying");
})

//accepts a paramater from the url
app.get('/hello/:name', (req, res) => {
    res.send("hello " + req.params.name);
})

//when method attribute is GET
app.get('/name', (req, res) => {
    //sent from action attribute in form from index.html
    res.send("hello " + req.query.fname + ' ' + req.query.lname);
})

//when method attirbute is POST
app.post('/name', (req, res) => {
    //sent from action attribute in form from index.html
    res.send("hello " + req.body.fname + ' ' + req.body.lname);
})

app.get('/api/books', (req, res) => {
//json data
    const data = [
        {
            "title": "Learn Git in a Month of Lunches",
            "isbn": "1617292419",
            "pageCount": 0,
            "thumbnailUrl":
                "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
            "status": "MEAP",
            "authors": ["Rick Umali"],
            "categories": []
        },
        {
            "title": "MongoDB in Action, Second Edition",
            "isbn": "1617291609",
            "pageCount": 0,
            "thumbnailUrl":
                "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
            "status": "MEAP",
            "authors": [
                "Kyle Banker",
                "Peter Bakkum",
                "Tim Hawkins",
                "Shaun Verch",
                "Douglas Garrett"
            ],
            "categories": []
        },
        {
            "title": "Getting MEAN with Mongo, Express, Angular, and Node",
            "isbn": "1617292036",
            "pageCount": 0,
            "thumbnailUrl":
                "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
            "status": "MEAP",
            "authors": ["Simon Holmes"],
            "categories": []
        }
    ]

    //send json object
    res.json(data);
})

app.get('/test', (req, res) => {
    //__dirname gives current source directory
    res.sendFile(__dirname + "/index.html");
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})