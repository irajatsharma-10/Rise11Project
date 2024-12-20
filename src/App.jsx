import React from "react";
import Sidebar from "./components/Sidebar";
import ProgressBar from "./components/ProgressBar";
import FormSection from "./components/FormSection";
import { FiBell, FiUser } from "react-icons/fi";

function App() {
  return (
    <div className="flex h-screen">

      {/* Sidebar */}
      <div className="hidden md:block w-64 bg-zinc-50 shadow-lg h-full">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-zinc-50 relative">

        {/* Top-Right Corner Icons */}
        <div className="flex p-2 justify-end">
          <div className="relative w-10 h-10 flex items-center justify-center">
            <FiBell className="text-blue-500 text-xl" />
            <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full border-2 border-white"></span>
          </div>
          <div className="w-10 h-10 flex items-center justify-center">
            <FiUser className="text-blue-500 text-xl" />
          </div>
        </div>

        {/* Main Content with Padding */}
        < div className="container bg-zinc-100  rounded-3xl flex flex-col mt-5">
            <ProgressBar />
            <FormSection />
        </div>
      </div>
    </div>
  );
}

export default App;
