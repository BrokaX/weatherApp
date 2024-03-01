// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS, defaults } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import PropTypes from 'prop-types';

const Chart = ({ data }) => {
  defaults.maintainAspectRatio = false;
  defaults.responsive = true;

  defaults.plugins.title.display = true;
  defaults.plugins.title.align = 'center';
  defaults.plugins.title.font.size = 20;
  defaults.plugins.title.color = 'grey';

  return (
    <Line
      datasetIdKey='id'
      data={{
        labels: data.time,
        datasets: [
          {
            id: 1,
            label: 'Temperature',
            data: data.temp,
            backgroundColor: '#0071a248',
            fill: true,
            cubicInterpolationMode: 'monotone',
            tension: 0.9,
          },
        ],
      }}
      options={{
        responsive: true,
        elements: {
          line: {
            tension: 0.4,
            borderWidth: 2,
            borderColor: '#7a8a9c',
          },
          point: {
            radius: 5,
            hoverRadius: 4,
            hoverBorderWidth: 13,
            borderWidth: 3,
            borderColor: '#7a8a9c',
          },
        },
        plugins: {
          title: {
            display: true,
            text: '8 Hours Forecast',
            color: '#7a8a9c',
          },
        },
        interaction: {
          intersect: false,
        },
        scales: {
          x: {
            display: true,
            title: {
              display: false,
            },
            grid: {
              display: false,
              drawOnChartArea: true,
              drawTicks: true,
              color: '#5c6167',
            },
            ticks: {
              color: '#7a8a9c',
            },
          },
          y: {
            display: true,
            title: {
              display: false,
            },
            grid: {
              display: true,
              drawOnChartArea: true,
              drawTicks: true,
              color: '#5c61676c',
            },
            ticks: {
              color: '#7a8a9c',
            },
            suggestedMin: 5,
            suggestedMax: 10,
          },
        },
      }}
      height={200}
    />
  );
};

Chart.propTypes = {
  data: PropTypes.object,
};

export default Chart;
