const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const util = require("./util.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


const fileIds = {
    "1": "GDP Growth Rate -API_NY.GDP.MKTP.KD.ZG_DS2_en_csv_v2_3158928.csv",
    "2": "GDP USD - API_NY.GDP.MKTP.CD_DS2_en_csv_v2_3263806.csv",
    "3": "CurrentAccountBalance-API_BN.CAB.XOKA.GD.ZS_DS2_en_csv_v2_3158921.csv"
}

app.get('/api/:id', async (req, res) => {
    const json = await util.toJson(`./data/${fileIds[req.params.id]}`)
    res.send(json);
});

app.listen(port, () => console.log(`Listening on port ${port}`));