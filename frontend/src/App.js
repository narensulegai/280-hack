import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import Timeseries from "./components/timeseries";


const apis = {
    "1": {
        yearCol: "Year",
        india: "GDP growth (annual %) India",
        china: "GDP growth (annual %) China",
        usa: "GDP growth (annual %) USA"
    },
}

const App = () => {

    const [metric, setMetric] = useState({month: [], count: []});
    const [country, setCountry] = useState("usa");

    const countryEle = useRef();

    const loadData = async () => {
        const id = "1"
        const response = await fetch(`/api/${id}`);
        const body = await response.json();
        const title = apis[id][country];
        const yearCol = apis[id].yearCol;
        const metricCount = body.map(d => parseFloat(d[title]) || 0)
        const metricMonth = body.map(d => `${d[yearCol]}-01`)
        setMetric({count: metricCount, month: metricMonth, title})
    }

    useEffect(() => {
        (async () => {
            await loadData()
        })()
    }, [])


    const handleCountryChange = async () => {
        setCountry(countryEle.current.value);
        await loadData();
    }

    return (
        <div className="layout">
            <div>
                Country
                <select ref={countryEle} value={country} onChange={handleCountryChange}>
                    <option value="usa">USA</option>
                    <option value="china">China</option>
                    <option value="india">India</option>
                </select>
            </div>
            <Timeseries metric={metric}/>
        </div>
    );
}

export default App;