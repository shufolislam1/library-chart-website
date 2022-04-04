import React from 'react';
import ChartWithAxis from '../ChartWithAxis/ChartWithAxis';
import SimpleLineChart from '../SimpleLineChart/SimpleLineChart';
import "./DashBoard.css"

const DashBoard = () => {
    return (
        <div className='dashboard-container'>
            <SimpleLineChart></SimpleLineChart>
            <ChartWithAxis></ChartWithAxis>
        </div>
    );
};

export default DashBoard;