import { motion } from "framer-motion";
import {
  AlertTriangle,
  Info,
  XCircle,
  Clock,
  ExternalLink,
} from "lucide-react";

// In your AnomalyAlert.tsx
interface AnomalyAlertProps {
  severity: "high" | "medium" | "low"; // Strictly typed
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
  const colors = {
    high: "red",
    medium: "orange",
    low: "yellow",
  };

  const icons = {
    high: <XCircle className="text-red-500" size={18} />,
    medium: <AlertTriangle className="text-orange-500" size={18} />,
    low: <Info className="text-yellow-500" size={18} />,
  };

  return (
    <motion.div
      className={`p-4 rounded-lg bg-gray-700/50 border-l-4 border-${colors[severity]}-500 flex items-start mb-3`}
      whileHover={{ x: 5 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="mr-3 mt-0.5">{icons[severity]}</div>
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <h4 className="font-medium">{apiName}</h4>
          <button className="text-gray-500 hover:text-white">
            <ExternalLink size={16} />
          </button>
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
