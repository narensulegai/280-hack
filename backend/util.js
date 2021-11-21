const csv = require("csvtojson");

const toJson = async (path) => {
    return csv().fromFile(path);
}

module.exports = {toJson}