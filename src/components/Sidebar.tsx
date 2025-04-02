import { motion } from "framer-motion";
import {
  LayoutDashboard,
  HeartPulse,
  AlertCircle,
  Activity,
  FileText,
  Settings,
} from "lucide-react";

const navItems = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Real-Time Metrics", icon: HeartPulse },
  { name: "Anomaly Alerts", icon: AlertCircle },
  { name: "Predictive Insights", icon: Activity },
  { name: "Error Logs", icon: FileText },
  { name: "Settings", icon: Settings },
];

export default function Sidebar({
  isOpen,
  toggleSidebar,
}: {
  isOpen: boolean;
  toggleSidebar: () => void;
}) {
  return (
    <motion.aside
      className={`bg-gray-800 border-r border-gray-700 flex flex-col ${
        isOpen ? "w-64" : "w-20"
      } transition-all duration-300`}
      initial={{ x: -300 }}
      animate={{ x: 0 }}
    >
      <div className="p-4 flex-1 overflow-y-auto">
        <nav className="space-y-1">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href="#"
              className={`flex items-center p-3 rounded-lg ${
                index === 0
                  ? "bg-gray-700 text-white"
                  : "text-gray-400 hover:bg-gray-700 hover:text-white"
              }`}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <item.icon size={20} />
              {isOpen && <span className="ml-3">{item.name}</span>}
            </motion.a>
          ))}
        </nav>
      </div>
      <div className="p-4 border-t border-gray-700">
        <motion.button
          onClick={toggleSidebar}
          className="w-full flex items-center justify-center p-2 text-gray-400 hover:text-white rounded-lg hover:bg-gray-700"
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="ml-2">Collapse</span>
            </>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </motion.button>
      </div>
    </motion.aside>
  );
}
