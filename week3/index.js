const express = require("express")
const zod = require("zod");
const app = express();
const port = 3000;

// const schema = zod.array(zod.number());

// for a user schmea 
function validateInput(obj) {

    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8),
    })

    const response = schema.safeParse(obj);
    console.log(response)
}


app.use(express.json());

app.post('/health-checkup', function (req, res) {
    const kidney = req.body.kidneys;
    const response = schema.safeParse(kidney);
    if (!response.success) {
        res.status(411).json({
            msg: "Invalid input"
        })
    }
    else {
        res.send({
            response
        })
    }
})


app.post('/login', function (req, res) {
    const response = validateInput(req.body);
    if (!response.success) {
        res.json({
            msg: "Your inputs are invalid"
        })
        return;
    }
})
app.listen(port, () => {
    console.log('the server is running at 3000')
})