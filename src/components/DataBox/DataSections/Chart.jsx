import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const CanvasChart = ({ data }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const drawChart = () => {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

      const width = canvas.width;
      const height = canvas.height;

      // Clear canvas
      context.clearRect(0, 0, width, height);

      // Draw axes
      context.beginPath();
      context.moveTo(0, height / 2);
      context.lineTo(width, height / 2);
      context.moveTo(0, 0);
      context.lineTo(0, height);
      context.stroke();

      // Draw data
      const intervalWidth = width / (data.length - 1);
      context.beginPath();
      context.moveTo(0, height / 2 - data[0]);

      
      data.forEach((value, index) => {
        context.lineTo(index * intervalWidth, height / 2 - value);
      });
      context.strokeStyle = 'blue';
      context.stroke();
    };

    drawChart();
  }, [data]);

  return <CanvasChart data={data} />;
};

CanvasChart.prototype = {
  data: PropTypes.arrayOf(PropTypes.number).isRequired,
  foreEach: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default CanvasChart;
