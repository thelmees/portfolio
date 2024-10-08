
// // import Chart from 'chart.js/auto';

// import React from 'react';
// import { Chart } from 'react-chartjs-2';
// import { Colors, Line, scales, Ticks } from 'chart.js/auto';
// import { FaWeight } from 'react-icons/fa';

// function MyChart() {
//     const data = {
//         labels: [
//           'Planning',
//           'Defining',
//           'Designing',
//           'Developing',
//           'Testing',
//           'Deployment'
//         ],
//         datasets: [{
//           label: 'Required Skills',
//           data:[95, 90, 90, 90, 92, 98],
//           fill: true,
//           backgroundColor: 'rgba(255, 99, 132, 0.2)',
//           borderColor: 'rgb(255, 99, 132)',
//           pointBackgroundColor: 'rgb(255, 99, 132)',
//           pointBorderColor: '#fff',
//           pointHoverBackgroundColor: '#fff',
//           pointHoverBorderColor: 'rgb(255, 99, 132)'
//         }, {
//           label: 'My Skills',
//           data: [85, 85, 85, 90, 80, 90],
//           fill: true,
//           backgroundColor: 'rgba(54, 162, 235, 0.2)',
//           borderColor: 'rgb(54, 162, 235)',
//           pointBackgroundColor: 'rgb(54, 162, 235)',
//           pointBorderColor: '#fff',
//           pointHoverBackgroundColor: '#fff',
//           pointHoverBorderColor: 'rgb(54, 162, 235)'
//         }]
//       };

//       const options = {
//         layout: {
//             padding: {
//                 left: 0
//             }
//         },
//         plugins: {
//           legend: {
//             labels: {
//               color: '#e4e4e4',
//               font: {
//                 size: 16,
//                 family: 'monospace',
//                 weight: '600',
//             }
//             }
//           }
//         },
//         scales: {
//           r: {
//             pointLabels: {  
//               color: '#e4e4e4',
//               font: {
//                 size: 14,
//                 family: 'monospace',
//                 weight: '600',
//               }
//             },
//             ticks: {
//               display: false,
             
//             },
//           }
//         }
//       };
  

//   return (
//     <div>
//       <Chart type='radar' data={data} options={options}/>
//     </div>
//   );
// }

// export default MyChart;

import React from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";


ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const MyChart = () => {

  const data = {
    labels: [
      'Planning',
      'Requirement Analysis',
      'Designing',
      'Developing',
      'Testing',
      'Deployment'
    ],
    datasets: [
      {
        label: "Current Skill Level",
        data: [75, 75, 80, 75, 65, 60],
        fill: true,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        pointBackgroundColor: "rgba(54, 162, 235, 1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(54, 162, 235, 1)",
      },
      {
        label: "Required Skill Level",
        data: [90, 85, 90, 80, 75, 85],
        fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        pointBackgroundColor: "rgba(255, 99, 132, 1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(255, 99, 132, 1)",
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          
          // This more specific font property overrides the global property
          ffont: function (context) {
            var width = context.chart.width;
            var height = context.chart.height;
            var size = Math.round(Math.min(width, height) / 32);
            return { size: size, weight: "bold" };
          },
        },
        display: true, // Hide the legend
      },
    },
    scales: {
      r: {
        angleLines: {
          display: false,
        },
        pointLabels: {
           // Change radar chart labels color
          font: function (context) {
            var width = context.chart.width;
            var height = context.chart.height;
            var size = Math.round(Math.min(width, height) / 42);
            return { size: size, weight: "bold" };
          },
        },
        ticks: {
          display: false,
        },
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
  };

  return (
    <div className="chart-container">
      <Radar data={data} options={options} />
    </div>
  );
};

export default MyChart;