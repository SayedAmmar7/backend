const express = require('express');
const app = express();
app.use(express.json());
let users = [
    {
        id: 1,
        name: "Abhishek",
        age: 100,
    },
    {
        id: 2,
        name: "Rajat",
        age: 10,
    },
    {
        id: 3,
        name: "Sunjyot",
        age: 50,
    },
];


app.get('/users', (req, res) => {
    res.send(users);
})

app.post('/users', (req, res) => {
    console.log(req.body.Name)
    res.json({
        message: "data recieved sucessfully",
        users: req.body
    })
})

app.patch('/users', (req, res) => {
    console.log(req.body);
    let dataToBrUpdated = req.body;
    for (key in dataToBrUpdated) {
        users[key] = dataToBrUpdated;
    }
    res.json({
        message: "data updated sucessfully"
    })
})

app.delete("/users", (req, res) => {
    users = {};
    res.json({
        msg: "users has been deleted"
    })
})

app.get("/user/:id", (req, res) => {
    console.log(req.params.id);
    res.json({
        msg: "user id is ",
        "obj": req.params
    });
});

app.get("/user", (req, res) => {
    console.log(req.query);
    let { name, age } = req.query;
    let filteredData = users.filter(userobj => {
        return (userobj.name == name && userobj.age == age)
    })
    res.send(filteredData);
    res.json({
        msg: "user id is ",
        "obj": req.params
    });
});

app.listen(5000);