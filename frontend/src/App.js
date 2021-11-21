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
    const [dataId, setDataId] = useState("1");

    const countryEle = useRef();

    const loadData = async () => {
        const response = await fetch(`/api/${dataId}`);
        const body = await response.json();
        const title = apis[dataId][country];
        const yearCol = apis[dataId].yearCol;
        const metricCount = body.map(d => parseFloat(d[title]) || 0)
        const metricMonth = body.map(d => `${d[yearCol]}-01`)
        setMetric({count: metricCount, month: metricMonth, title})
    }

    useEffect(() => {
        (async () => {
            await loadData()
        })()
    }, [country, dataId])


    const handleCountryChange = async () => {
        setCountry(countryEle.current.value);
    }

    const handleOnDragStart = (e) => {
        e.dataTransfer.setData("id", e.target.getAttribute("dataid"))
    }
    const handleOnDragOver = (e) => {
        e.preventDefault();
    }
    const handleOnDrop = (e) => {
        setDataId(e.dataTransfer.getData("id"))
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
            <div>
                <div draggable={true} onDragStart={handleOnDragStart} dataid="1">
                    GDP Growth Rate
                </div>
            </div>
            <div onDragOver={handleOnDragOver} onDrop={handleOnDrop}>
                <Timeseries metric={metric}/>
            </div>
        </div>
    );
}

export default App;