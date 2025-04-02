import { motion } from "framer-motion";
import { AlertTriangle, Clock, Info, XCircle } from "lucide-react";

interface AnomalyAlertProps {
  severity: "high" | "medium" | "low";
  apiName: string;
  message: string;
  time: string;
  rootCause: string;
}

export default function AnomalyAlert({
  severity,
  apiName,
  message,
  time,
  rootCause,
}: AnomalyAlertProps) {
  const icons = {
    high: <XCircle className="text-red-500" size={18} />,
    medium: <AlertTriangle className="text-orange-500" size={18} />,
    low: <Info className="text-yellow-500" size={18} />,
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className={`p-4 rounded-lg bg-gray-700/50 border-l-4 ${
        severity === "high"
          ? "border-red-500"
          : severity === "medium"
          ? "border-orange-500"
          : "border-yellow-500"
      } flex items-start mb-3`}
    >
      <div className="mr-3 mt-0.5">{icons[severity]}</div>
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <h4 className="font-medium">{apiName}</h4>
        </div>
        <p className="text-sm text-gray-400 mt-1">{message}</p>
        <div className="mt-2 flex items-center text-xs text-gray-500 flex-wrap gap-2">
          <span className="flex items-center">
            <Clock size={12} className="mr-1" />
            {time}
          </span>
          <span className="hidden sm:inline">•</span>
          <span>Root cause: {rootCause}</span>
        </div>
      </div>
    </motion.div>
  );
}
