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
}

const metrics = [
    {name: "GDP growth (annual %)", aipId: "1"},
    {name: "GDP (current US$)", aipId: "2"},
    {name: "Current Account Balance", aipId: "3"},
]

module.exports = {
    apis, metrics
}