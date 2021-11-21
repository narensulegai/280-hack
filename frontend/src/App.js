import React, {useEffect, useState} from 'react';
import './App.css';
import Timeseries from "./components/timeseries";


const apis = {
    "GDP growth": {endpoint: "1"}
}

const App = () => {

    // const metricCount = [1, 3, 1, 2, 1, 1, 1, 1, 2, 2, 3, 1, 2, 1, 4, 3, 2, 1, 1, 1, 1, 1, 4, 2, 1, 2, 8, 2, 1, 4, 2, 4, 1, 3, 1, 2, 1, 1, 3, 1, 1, 5, 1, 1, 4];
    // const metricMonths = ["2018-06", "2013-04", "2015-11", "2012-10", "2014-09", "2014-02", "2016-02", "2016-04", "2016-06", "2014-12", "2013-07", "2017-01", "2015-10", "2012-12", "2013-05", "2018-04", "2015-06", "2017-03", "2014-08",
    //     "2017-07", "2013-02", "2012-07", "2016-03", "2017-06", "2018-07", "2014-10", "2013-01", "2013-10", "2017-11", "2014-05", "2012-11", "2015-01", "2018-03", "2015-12", "2015-08", "2016-08", "2014-11", "2014-01",
    //     "2013-06", "2012-08", "2015-09", "2016-07", "2013-03", "2012-09", "2016-05"];

    //http://localhost:5000/api/world

    const [metricCount, setMetricCount] = useState([]);
    const [metricMonths, setMetricMonths] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await fetch(`/api/${apis["GDP growth"].endpoint}`);
            const body = await response.json();
            console.log(body)
        })()
    }, [])

    return (
        <div className="layout">
            <Timeseries metricCount={metricCount} metricMonths={metricMonths}/>
        </div>
    );
}

export default App;