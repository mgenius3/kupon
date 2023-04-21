import React from 'react';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Bar,
  BarChart,
} from 'recharts';

const data = [
  { name: 'Jan', users: 100 },
  { name: 'Feb', users: 200 },
  { name: 'Mar', users: 300 },
  { name: 'Apr', users: 400 },
  { name: 'May', users: 500 },
  { name: 'Jun', users: 600 },
];

const Chart = () => {
  return (
    <BarChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      {/* <Line type="monotone" dataKey="users" stroke="#8884d8" /> */}
      <Bar dataKey="users" fill="#8884d8" />
    </BarChart>
  );
};

export default Chart;
