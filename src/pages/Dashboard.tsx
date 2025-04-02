import { motion } from "framer-motion";
import {
  LineChartWrapper,
  BarChartWrapper,
} from "../components/ApiHealthChart";
import MetricCard from "../components/MetricCard";
import AnomalyAlert from "../components/AnomalyAlert";
import { Activity, AlertCircle, Clock, Cpu, Server } from "lucide-react";

const metrics = [
  {
    title: "Total API Requests",
    value: "124,532",
    change: "+12%",
    trend: "up" as const,
    icon: <Server size={20} />,
  },
  {
    title: "Error Rate",
    value: "1.2%",
    change: "-0.4%",
    trend: "down" as const,
    icon: <AlertCircle size={20} />,
  },
  {
    title: "Anomalies Detected",
    value: "18",
    change: "+3",
    trend: "up" as const,
    icon: <Activity size={20} />,
  },
  {
    title: "Avg Response Time",
    value: "142ms",
    change: "-8ms",
    trend: "down" as const,
    icon: <Clock size={20} />,
  },
];

const alerts = [
  {
    severity: "high" as const,
    apiName: "Payment Processing API",
    message: "Response time > 2s for 15 minutes",
    time: "2 minutes ago",
    rootCause: "Database latency",
  },
  {
    severity: "medium" as const,
    apiName: "User Authentication API",
    message: "Error rate spike (12%)",
    time: "15 minutes ago",
    rootCause: "High traffic",
  },
  {
    severity: "low" as const,
    apiName: "Transaction History API",
    message: "Latency increase detected",
    time: "1 hour ago",
    rootCause: "Cache miss",
  },
];

const heatmapData = [
  [10, 15, 20, 25, 30, 35, 40],
  [15, 20, 25, 30, 35, 40, 45],
  [20, 25, 30, 35, 40, 45, 50],
  [25, 30, 35, 40, 45, 50, 55],
  [30, 35, 40, 45, 50, 55, 60],
];

const heatmapXLabels = [
  "00:00",
  "04:00",
  "08:00",
  "12:00",
  "16:00",
  "20:00",
  "24:00",
];
const heatmapYLabels = ["Mon", "Tue", "Wed", "Thu", "Fri"];

export default function Dashboard() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-full p-4 md:p-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Metrics Section */}
        <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <MetricCard {...metric} />
            </motion.div>
          ))}
        </div>

        {/* Main Charts */}
        <div className="lg:col-span-8 space-y-6">
          <motion.div
            className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700"
            whileHover={{ scale: 1.01 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-purple-400 flex items-center">
              <Activity className="mr-2" size={20} />
              API Response Times
            </h3>
            <LineChartWrapper />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700"
              whileHover={{ scale: 1.01 }}
            >
              <h3 className="text-lg font-semibold mb-4 text-blue-400 flex items-center">
                <AlertCircle className="mr-2" size={20} />
                Error Trends
              </h3>
              <BarChartWrapper />
            </motion.div>
          </div>
        </div>

        {/* Side Panels */}
        <div className="lg:col-span-4 space-y-6">
          <motion.div
            className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-red-400 flex items-center">
              <AlertCircle className="mr-2" size={20} />
              Anomaly Alerts
            </h3>
            <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
              {alerts.map((alert, i) => (
                <AnomalyAlert key={i} {...alert} />
              ))}
            </div>
          </motion.div>

          <motion.div
            className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-green-400 flex items-center">
              <Cpu className="mr-2" size={20} />
              Predictive Analytics
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                <h4 className="font-medium text-gray-300">
                  Failure Probability
                </h4>
                <div className="mt-2">
                  <div className="flex justify-between text-sm text-gray-400 mb-1">
                    <span>Next 24 hours</span>
                    <span>23%</span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2">
                    <div
                      className="bg-yellow-500 h-2 rounded-full"
                      style={{ width: "23%" }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                <h4 className="font-medium text-gray-300">APIs at Risk</h4>
                <ul className="mt-2 space-y-2 text-sm">
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-red-500 mr-2"></span>
                    Payment API (High risk)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-yellow-500 mr-2"></span>
                    Auth API (Medium risk)
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                <h4 className="font-medium text-gray-300">
                  Recommended Actions
                </h4>
                <ul className="mt-2 space-y-2 text-sm list-disc list-inside">
                  <li>Scale up Payment API instances</li>
                  <li>Check database connection pool</li>
                  <li>Review cache configuration</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
