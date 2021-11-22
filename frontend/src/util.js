const apis = {
    "1": {
        yearCol: "Year",
        india: "GDP growth (annual %) India",
        china: "GDP growth (annual %) China",
        usa: "GDP growth (annual %) USA"
    },
    "2": {
        yearCol: "Year",
        india: "GDP (current US$) India",
        china: "GDP (current US$) China",
        usa: "GDP (current US$) USA"
    },
    "3": {
        yearCol: "Year",
        india: "India",
        china: "China",
        usa: "USA"
    },
    "4": {
        yearCol: "Year",
        india: "Foreign direct investment, net (BoP, current US$) India",
        china: "Foreign direct investment, net (BoP, current US$) China",
        usa: "Foreign direct investment, net (BoP, current US$) USA"
    },
}

const metrics = [
    {name: "GDP growth (annual %)", aipId: "1"},
    {name: "GDP (current US$)", aipId: "2"},
    {name: "Current Account Balance", aipId: "3"},
    {name: "Foreign direct investment, net (BoP, current US$)", aipId: "4"},
]

module.exports = {
    apis, metrics
}