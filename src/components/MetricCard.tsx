import { motion } from "framer-motion";
import { ArrowUp, ArrowDown, TrendingUp } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: React.ReactNode;
}

export default function MetricCard({
  title,
  value,
  change,
  trend,
  icon,
}: MetricCardProps) {
  return (
    <motion.div
      className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 hover:border-purple-500 transition-all"
      whileHover={{ y: -5 }}
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-gray-400 text-sm font-medium">{title}</h3>
          <div className="flex items-end mt-2">
            <p className="text-2xl font-bold">{value}</p>
            <span
              className={`ml-2 flex items-center text-sm ${
                trend === "up" ? "text-green-400" : "text-red-400"
              }`}
            >
              {trend === "up" ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
              {change}
            </span>
          </div>
        </div>
        <div className="p-2 rounded-lg bg-gray-700 text-purple-400">{icon}</div>
      </div>
      <div className="mt-4 flex items-center text-blue-400 text-sm">
        <TrendingUp size={14} className="mr-1" />
        <span>Live counter</span>
      </div>
    </motion.div>
  );
}
