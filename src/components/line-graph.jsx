import React from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const LineGraph = ({ xData, yData, title, label }) => {
    const graphData = {
        labels: xData,
        datasets: [
            {
                label: label,
                data: yData,
                fill: false,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)",
            },
        ],
    };
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: title,
            },
        },
    };
    return (
        <div className="line-graph">
            <Line data={graphData} options={options} />;
        </div>
    );
};

export default LineGraph;
