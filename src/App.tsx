import { useState } from "react";
import { MotionConfig } from "framer-motion";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <MotionConfig reducedMotion="user">
      <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
        <Sidebar
          isOpen={sidebarOpen}
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
          <main className="flex-1 overflow-y-auto p-4 md:p-6">
            <Dashboard />
          </main>
        </div>
      </div>
    </MotionConfig>
  );
}

export default App;
