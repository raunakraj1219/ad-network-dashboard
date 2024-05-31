import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { generateRandomColor } from "../utils/common-utils";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ categoryData, categoryName, title }) => {
    const backgroundColor = categoryName.map(() => generateRandomColor());
    const borderColor = backgroundColor.map((color) =>
        color.replace("0.2", "1")
    );
    const data = {
        labels: categoryName,
        datasets: [
            {
                label: "# of Votes",
                data: categoryData,
                backgroundColor: backgroundColor,
                borderColor: borderColor,
                borderWidth: 1,
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
    return <Pie data={data} options={options} />;
};

export default PieChart;
