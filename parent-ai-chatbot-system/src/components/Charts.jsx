import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const AttendanceChart = ({ history }) => {
  const data = {
    labels: ['Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5', 'Month 6'],
    datasets: [
      {
        label: 'Attendance %',
        data: history || [65, 68, 70, 75, 78, 72],
        borderColor: '#5EB2F1',
        backgroundColor: 'rgba(94, 178, 241, 0.5)',
        tension: 0.4,
        fill: true,
      },
      {
        label: 'Minimum Requirement',
        data: [75, 75, 75, 75, 75, 75],
        borderColor: '#E74C3C',
        borderDash: [5, 5],
        pointRadius: 0,
        fill: false,
      }
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'top' },
    },
    scales: {
      y: { min: 0, max: 100 }
    }
  };

  return <Line options={options} data={data} />;
};

export const CgpaChart = ({ semesters }) => {
  if (!semesters) return null;
  
  const data = {
    labels: semesters.map(s => s.sem),
    datasets: [
      {
        label: 'Semester GPA',
        data: semesters.map(s => s.gpa),
        backgroundColor: '#0E1B4D',
        borderRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'top' },
    },
    scales: {
      y: { min: 0, max: 10 }
    }
  };

  return <Bar options={options} data={data} />;
};
