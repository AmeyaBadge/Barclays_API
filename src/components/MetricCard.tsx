import { motion } from "framer-motion";
import { ArrowUp, ArrowDown, TrendingUp } from "lucide-react";
import React from "react";

interface MetricCardProps {
  title: string;
  value: number;
  change: string;
  trend: "up" | "down";
  icon: React.ReactNode;
}

const formatNumber = (num: number) => {
  return new Intl.NumberFormat().format(num);
};

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
            <motion.p
              className="text-2xl font-bold"
              key={value}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {title.includes("Rate")
                ? `${value.toFixed(1)}%`
                : title.includes("Time")
                ? `${Math.round(value)}ms`
                : formatNumber(value)}
            </motion.p>
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
