import { motion } from "framer-motion";
import { Menu, Search, Bell, User } from "lucide-react";
import BarclaysLogo from "./BarclaysLogo";

export default function Navbar({
  toggleSidebar,
}: {
  toggleSidebar: () => void;
}) {
  return (
    <motion.header
      className="sticky top-0 z-10 bg-gray-800 border-b border-gray-700 p-4"
      initial={{ y: -20 }}
      animate={{ y: 0 }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleSidebar}
            className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-gray-700"
          >
            <Menu size={24} />
          </button>
          <div className="flex items-center space-x-2">
            <BarclaysLogo className="h-8 w-auto" />
            <span className="text-xl font-semibold hidden md:inline">
              API Sentinel
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="text-gray-400" size={18} />
            </div>
            <input
              type="text"
              className="bg-gray-700 text-white rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 w-64"
              placeholder="Search APIs or alerts..."
            />
          </div>

          <button className="text-gray-400 hover:text-white p-2 rounded-full relative">
            <Bell size={20} />
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
          </button>

          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-purple-600 flex items-center justify-center">
              <User size={16} />
            </div>
            <span className="hidden md:inline">Admin</span>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
