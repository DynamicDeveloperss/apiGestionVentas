const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors({
    origin: '*'
}));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.post('/roles', (req, res) => {
    console.log(req.body)
    res.send('Hello  prueba!');
});

app.listen(5000, () => {
    console.log('Example app listening on port 5000!');
});

//Run app, then load http://localhost:3000 in a browser to see the output.