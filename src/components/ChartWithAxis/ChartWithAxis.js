// import React from 'react';
import React, { useEffect, useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const ChartWithAxis = () => {
        const [anotherChart, SetAnotherChart] = useState({});
    
        useEffect( () =>{
            fetch('chart.json')
            .then(res => res.json())
            .then(data => SetAnotherChart(data))
        }, [])

        return (
        <LineChart width={600} height={300} data={anotherChart}>
                <Line type="monotone" dataKey="investment" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="month" />
                <YAxis />
        </LineChart>
    );
};

export default ChartWithAxis;