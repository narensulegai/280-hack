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
    "3": "CurrentAccountBalance-API_BN.CAB.XOKA.GD.ZS_DS2_en_csv_v2_3158921.csv",
    "4": "Foreign direct investment, net (BoP, current US$) - API_BN.KLT.DINV.CD_DS2_en_csv_v2_3158846.csv",
    "5":"Foreign direct investment, net outflows (BoP, current US$) - BM.KLT.DINV.CD.WD.csv"
}
const annotations = {}

app.get('/api/data/:id', async (req, res) => {
    const json = await util.toJson(`./data/${fileIds[req.params.id]}`)
    res.send(json);
});

app.get('/api/annotations', async (req, res) => {
    res.send(annotations);
});

app.post('/api/annotation/:id', async (req, res) => {
    console.log(req.body)
    annotations[req.body.email] = req.body.text
    res.send(annotations);
});

app.listen(port, () => console.log(`Listening on port ${port}`));