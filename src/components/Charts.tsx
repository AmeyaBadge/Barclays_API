import {
  LineChart as RechartsLineChart,
  BarChart as RechartsBarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Line,
  Bar,
  Cell,
} from "recharts";

interface ChartData {
  name: string;
  value?: number;
  errors?: number;
}

export function CustomLineChart() {
  const data: ChartData[] = [
    { name: "00:00", value: 120 },
    { name: "04:00", value: 150 },
    { name: "08:00", value: 200 },
    { name: "12:00", value: 350 },
    { name: "16:00", value: 280 },
    { name: "20:00", value: 180 },
    { name: "24:00", value: 130 },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsLineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
        <XAxis dataKey="name" stroke="#9CA3AF" />
        <YAxis stroke="#9CA3AF" />
        <Tooltip
          contentStyle={{ backgroundColor: "#1F2937", borderColor: "#4B5563" }}
          itemStyle={{ color: "#E5E7EB" }}
        />
        <Legend />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#8B5CF6"
          strokeWidth={2}
          dot={{ r: 4 }}
          activeDot={{ r: 6, stroke: "#A78BFA", strokeWidth: 2 }}
        />
      </RechartsLineChart>
    </ResponsiveContainer>
  );
}

export function CustomBarChart() {
  const data: ChartData[] = [
    { name: "Mon", errors: 12 },
    { name: "Tue", errors: 19 },
    { name: "Wed", errors: 8 },
    { name: "Thu", errors: 15 },
    { name: "Fri", errors: 22 },
    { name: "Sat", errors: 5 },
    { name: "Sun", errors: 3 },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsBarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
        <XAxis dataKey="name" stroke="#9CA3AF" />
        <YAxis stroke="#9CA3AF" />
        <Tooltip
          contentStyle={{ backgroundColor: "#1F2937", borderColor: "#4B5563" }}
          itemStyle={{ color: "#E5E7EB" }}
        />
        <Bar dataKey="errors" fill="#3B82F6" radius={[4, 4, 0, 0]}>
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={entry.errors && entry.errors > 15 ? "#EF4444" : "#3B82F6"}
            />
          ))}
        </Bar>
      </RechartsBarChart>
    </ResponsiveContainer>
  );
}
