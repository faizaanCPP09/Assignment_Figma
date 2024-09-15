"use client"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const incomeData = [
  { name: 'May', ourCommission: 40, totalRevenue: 80 },
  { name: 'Jun', ourCommission: 50, totalRevenue: 100 },
  { name: 'Jul', ourCommission: 60, totalRevenue: 120 },
];

const pieData = [
  { name: 'Online Consultations', value: 400 },
  { name: 'Offline Consultations', value: 300 },
  { name: 'Consultation Packages', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

export default function RevenueGraphs() {
  return (
    <div className="p-6 bg-white rounded-lg shadow">
      {/* This is a Line Chart for Income Accumulation */}
      <h2 className="text-xl font-semibold mb-4">Income Accumulation Graph</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={incomeData}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="ourCommission" stroke="#8884d8" />
          <Line type="monotone" dataKey="totalRevenue" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>

      {/* This is Pie Chart for Revenue Distribution */}
      <h2 className="text-xl font-semibold mt-6 mb-4">Revenue Distribution By Source</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
