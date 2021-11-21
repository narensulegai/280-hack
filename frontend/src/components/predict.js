import React, {useState} from 'react';
import {metrics} from '../util';

const Predict = () => {

    const [data, setData] = useState({})

    const handleOnSliderChange = (e) => {
        const id = e.target.getAttribute('dataid')
        data[id] = e.target.value;
        setData({...data})
    }

    const handleOnDownload = () => {
        const d = metrics.map((m) => {
            return {name: m.name, value: parseInt(data[m.aipId]) || 0};
        })
        download('prediction.json', JSON.stringify(d, null, 2));
    }

    const download = (filename, text) => {
        const element = document.createElement('a');
        element.setAttribute('href', 'data:text/json;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }
    return (
        <div className="predict">
            <h2>Model prediction</h2>
            {metrics.map((m) => {
                return <div key={m.aipId} className="flex-space">
                    <div>{m.name}</div>
                    <input type="range" min="1" max="100" defaultValue={1}
                           onChange={handleOnSliderChange}
                           dataid={m.aipId}/>
                </div>
            })}
            <div className="margin-top center">
                <button onClick={handleOnDownload}>Download</button>
            </div>
        </div>
    );
};

export default Predict;