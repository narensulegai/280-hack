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
    "5": {
        yearCol: "Year",
        india: "Foreign direct investment, net outflows (BoP, current US$) India",
        china: "Foreign direct investment, net outflows (BoP, current US$) China",
        usa: "Foreign direct investment, net outflows (BoP, current US$) USA"
    },
    "6": {
        yearCol: "Year",
        india: "Foreign direct investment, net inflows (% of GDP) India",
        china: "Foreign direct investment, net inflows (% of GDP) China",
        usa: "Foreign direct investment, net inflows (% of GDP) USA"
    }
}

const metrics = [
    {name: "GDP growth (annual %)", aipId: "1"},
    {name: "GDP (current US$)", aipId: "2"},
    {name: "Current Account Balance", aipId: "3"},
    {name: "Foreign direct investment, net (BoP, current US$)", aipId: "4"},
    {name: "Foreign direct investment, net outflows (BoP, current US$)", aipId: "5"},
    {name: "Foreign direct investment, net inflows (% of GDP)", aipId: "6"},
    // {name: "FDI-NetOutflows(%ofGDP)", aipId: "7"},
    // {name: "Agricultural Contribution (% GDP)", aipId: "9"},
    // {name: "Manufacturing(%GDP)", aipId: "10"},
    // {name: "Agriculture, forestry, and fishing, value added (annual % growth)", aipId: "11"},
    // {name: "Fertilizer consumption (kilograms per hectare of arable land)", aipId: "12"},
    // {name: "Fertilizer consumption (% of fertilizer production)", aipId: "13"},
    // {name: "Total reserves in months of imports", aipId: "14"},
    // {name: "Total reserves (includes gold, current US$)", aipId: "15"},
    // {name: "Total reserves (% of total external debt)", aipId: "16"},
    // {name: "Debt service (PPG and IMF only, % of exports of goods, services and primary income)", aipId: "17"},
    // {name: "Total debt service (% of GNI)", aipId: "18"},
    // {name: "GNI (current US$)", aipId: "19"},

]

module.exports = {
    apis, metrics
}