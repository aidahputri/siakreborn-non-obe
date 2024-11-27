import { Bar } from "react-chartjs-2";
import {
  Chart,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export const BarChart = ({ title, labels, data, yLabel, xLabel }) => {
  const chartData = {
    labels,
    datasets: [
      {
        data,
        backgroundColor: "#FFB80088",
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: xLabel,
        },
      },
      y: {
        title: {
          display: true,
          text: yLabel,
        },
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return (
    <div className="mx-auto w-full max-w-screen-xl prose flex flex-col">
      <div className="w-full flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-4">
        <h2 className="m-0 text-center">{title}</h2>
      </div>
      <Bar data={chartData} options={options} />
    </div>
  );
};
