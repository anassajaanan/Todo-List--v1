const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const date = require(__dirname + '/date.js');


const app = express();
const port = process.env.PORT || 3000;



app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));



const arr1 = ["Programming", "Build Project", "Watch Youtube"];
const arr2 = [];

app.get('/', (req, res) => {
    const currentDate = date.getDate();
    res.render('index', {title: currentDate, listItems: arr1});
})

app.post('/', (req, res) => {
    const newTodoList = req.body.todo;
    if (req.body.button === "Work List") {
        arr2.push(newTodoList)
        res.redirect("/work")
    } else {
        arr1.push(newTodoList);
        res.redirect("/");
    }
})

app.get('/work', (req, res) => {
    res.render('index', {title: "Work List", listItems: arr2});
})

app.listen(port, () => {
    console.log("Listening on port " + port);
})

