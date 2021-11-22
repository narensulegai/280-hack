import React, {useEffect, useRef, useState} from 'react';
import Timeseries from "./timeseries";
import {metrics, apis} from "../util";
import Predict from "./predict";

const Dashboard = ({currentUser, email}) => {

    const [metric, setMetric] = useState({month: [], count: []});
    const [country, setCountry] = useState("usa");
    const [dataId, setDataId] = useState("1");
    const [annoteText, setAnnoteText] = useState("");
    const [showPredict, setShowPredict] = useState(false);

    const countryEle = useRef();
    const annotateEle = useRef();

    useEffect(() => {
        (async () => {
            if (!localStorage.getItem(dataId)) {
                const response = await fetch(`/api/data/${dataId}`)
                const body = await response.json()
                localStorage.setItem(dataId, JSON.stringify(body))
            }
            const body = JSON.parse(localStorage.getItem(dataId))
            const title = apis[dataId][country]
            const yearCol = apis[dataId].yearCol
            const metricCount = body.map(d => parseFloat(d[title]) || 0)
            const metricMonth = body.map(d => `${d[yearCol]}-01`)
            setMetric({count: metricCount, month: metricMonth, title})
            {
                const body = await fetch(`/api/annotations`)
                const annotations = await body.json();
                setAnnoteText(annotations[email] || "")
            }
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

    const handleOnAnnotate = async () => {
        const text = annotateEle.current.value;
        await fetch(`/api/annotation/${email}`, {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify({email, text})
        });
        setAnnoteText(text);
    }

    const handleOnPredict = () => {
        setShowPredict(!showPredict)
    }
    return (
        <div className="body">
            <div className="margin-top">
                Country&nbsp;&nbsp;
                <select ref={countryEle} value={country} onChange={handleCountryChange}>
                    <option value="usa">USA</option>
                    <option value="china">China</option>
                    <option value="india">India</option>
                </select>
            </div>
            <div className="layout margin-top">
                <div>
                    {metrics.map((m) => {
                        return <div className="metric" draggable={true} key={m.aipId} onDragStart={handleOnDragStart}
                                    dataid={m.aipId}>
                            {m.name}
                        </div>
                    })}
                    <div className="margin-top center">
                        {currentUser
                            ? "You are a researcher"
                            : <button onClick={handleOnPredict}>{!showPredict ? "Predict" : "Show chart"}</button>}
                    </div>
                </div>
                <div onDragOver={handleOnDragOver} onDrop={handleOnDrop}>
                    <div className="center">
                        <b>
                            {metrics.filter((d) => {
                                return d.aipId === dataId
                            })[0].name}
                        </b>
                    </div>
                    {showPredict
                        ? <Predict/>
                        : <Timeseries metric={metric}/>}
                </div>
                <div>
                    <div>
                        <input type="text" ref={annotateEle}></input>
                    </div>
                    <div className="margin-top">
                        {annoteText || "-"}
                    </div>
                </div>
                <div>
                    <button onClick={handleOnAnnotate}>Annotate</button>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;