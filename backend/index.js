const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const util = require("./util.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/hello', (req, res) => {
    res.send({express: 'Hello From Express'});
});

app.get('/api/1', async (req, res) => {
    const json = await util.toJson("./data/GDP Growth Rate -API_NY.GDP.MKTP.KD.ZG_DS2_en_csv_v2_3158928.csv")
    res.send(json);
});

app.listen(port, () => console.log(`Listening on port ${port}`));