import React from 'react';
import ChartWithAxis from '../ChartWithAxis/ChartWithAxis';
import SimpleLineChart from '../SimpleLineChart/SimpleLineChart';

const DashBoard = () => {
    return (
        <div>
            <SimpleLineChart></SimpleLineChart>
            <ChartWithAxis></ChartWithAxis>
        </div>
    );
};

export default DashBoard;