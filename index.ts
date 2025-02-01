import express, { json } from "express";

const port = 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(port, () => {
    console.table({ port: port });
    console.log('Server running at http://localhost:3000/');

});

app.get('/200', (req, res) => {
    res.status(200).send({
        message: "This is Status 200",
        status: 200,
    })
})

app.get('/404', (req, res) => {
    res.status(404).send({
        message: "This is Status 404",
        status: 404,
    })
})

// app.post('/form-submit', (request, response) => {

//     const { body } = request;
//     response.status(201).send({
//         message: "User Successfully Logged in. 👳‍♂️",
//         token: "avengers 🦇",
//         content: body.content,
//         numbers: body.number,
//         users: body.users
//     })
// })

// app.post('/operation', (request, response) => {

//     const { operation, num1, num2 } = request.body;

//     switch (operation) {
//         case 'sum':
//             response.status(200).json(`The sum is: ${num1 + num2}`);
//             break;
//         case 'difference':
//             response.status(200).json(`The difference is ${num1 - num2}`);
//             break;
//         default:
//             response.status(404).json('No Operation! 😭');
//             break;
//     }
// })