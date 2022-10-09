import React, { Fragment, useContext } from 'react'
import Header from '../Components/Header';
import { sensorTableContext } from "../Context/SourceContext";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Line Chart',
        },
    },
};

export default function Sensor() {
    const { sensor } = useContext(sensorTableContext);
    const labels = sensor.map((item, idx) => idx);

    const data = {
        labels,
        datasets: [
            {
                label: 'Air Temperature',
                data: sensor.map(item => item.air_temperature),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Humidity',
                data: sensor.map(item => item.humidity),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
            {
                label: 'Light Intensity',
                data: sensor.map(item => item.light_intensity),
                borderColor: '#5AD8A6',
                backgroundColor: '#5AD8A6',
            },
        ],
    };
    return (
        <Fragment>
            <Header />
            <div className='container'>
                <Line options={options} data={data} />
            </div>
        </Fragment>
    )
}
