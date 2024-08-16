const express = require("express");
const bodyParser = require("body-parser")
const port = 3000
const app = express();

app.use(bodyParser.json());
// this middleware  means that this middleware will be call with every route
app.use(express.json());


// Normal routing
// app.get('/route-handler', (req, res) => {
//     res.json({
//         name: "Mridul",
//         age: "21"
//     })
// })
// app.get('/', (req, res) => {
//     res.send("hello world");
// })


// Doctors validation without   Middleware


// app.get('/health-checkup', (req, res) => {
//     const username = req.headers.username;
//     const password = req.headers.password;
//     const kidneyid = req.query.kidneyid;
//     if (username != 'Mridul' || password != "pass") {
//         res.status(400).json({ msg: "Something is wrong with your inputs in login" })
//         return;
//     }

//     if (kidneyid != 1 && kidneyid != 2) {
//         res.status(400).json({ msg: "Something is wrong with your inputs " })
//         return;
//     }
//     res.status(400).json({ msg: "Your kidney is Fine" })
// })

// // using Middleware

// const userMiddleware = (req, res, next) => {
//     if (username != 'Mridul' || password != "pass") {
//         res.status(400).json({ msg: "Something is wrong with your inputs in login" })
//     }
//     else {
//         next();
//     }
// }

// const kidneyMiddleware = (req, res, next) => {
//     if (kidneyid != 1 && kidneyid != 2) {
//         res.status(400).json({ msg: "Something is wrong with your inputs " })
//     }
//     else {
//         next();
//     }
// }

// app.post('/health-checkup2', userMiddleware, kidneyMiddleware, function (req, res) {
//     res.send("Your health is healthy");
// })


app.post('/health-checkup', function (req, res) {
    const kidney = req.body.kidney;
    const kidneylength = kidney.length;

    res.send("you have" + kidneylength + "kidney")
})


//  if there is an exception in the aove code then without exposing errors of your backedn simply use global cathces 

// Global Catches
app.use(function (err, req, res, next) {
    res.json({
        mssg: "sorry for the mess"
    })
})

app.listen(port, () => {
    console.log(`Example app listening on  port ${port}`)
})