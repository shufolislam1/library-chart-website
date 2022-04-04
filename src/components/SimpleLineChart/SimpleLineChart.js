import React, { useEffect, useState } from 'react';
import { Line, LineChart } from 'recharts';

const SimpleLineChart = () => {

    const [chart, SetChart] = useState({});

    useEffect( () =>{
        fetch('chart.json')
        .then(res => res.json())
        .then(data => SetChart(data))
    }, [])
    return (
        <LineChart width={400} height={300} data={chart}>
            <Line type="monotone" dataKey="revenue" stroke="#8884d8"></Line>
        </LineChart>
    );
};

export default SimpleLineChart;