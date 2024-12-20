import React from "react";
import { FiHome, FiBriefcase, FiActivity } from "react-icons/fi";
import { MdOutlineEventNote, MdFolderOpen } from "react-icons/md";
import { HiOutlineFlag } from "react-icons/hi";
import sidebarImage from "../assets/lawQuote.jpg";

const Sidebar = () => {
    return (
        <div className="w-64 h-screen  p-6 shadow-lg flex flex-col justify-between">
            {/* Logo */}
            <div>
                <div className="flex items-center mb-10">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 text-white"
                        >
                            <path d="M12 2L2 12h10v10l10-10H12V2z" fill="currentColor" />
                        </svg>
                    </div>
                    <h1 className="text-2xl font-bold text-gray-800 ml-2">Jur</h1>
                </div>

                {/* Menu */}
                <ul className="space-y-6">
                    <li className="flex items-center cursor-pointer">
                        <FiHome className="mr-3 text-xl text-blue-400" />
                        <span className="font-bold text-gray-500 hover:text-blue-400">
                            Dashboard
                        </span>
                    </li>
                    <li className="flex items-center cursor-pointer">
                        <FiBriefcase className="mr-3 text-xl text-blue-400" />
                        <span className="font-bold text-gray-500 hover:text-blue-400">
                            My Cases
                        </span>
                    </li>
                    <li className="flex items-center cursor-pointer">
                        <FiActivity className="mr-3 text-xl text-blue-400" />
                        <span className="font-bold text-gray-500 hover:text-blue-400">
                            Activities
                        </span>
                    </li>
                    <li className="flex items-center cursor-pointer">
                        <MdOutlineEventNote className="mr-3 text-xl text-blue-400" />
                        <span className="font-bold text-gray-500 hover:text-blue-400">
                            Calendar
                        </span>
                    </li>
                    <li className="flex items-center cursor-pointer">
                        <MdFolderOpen className="mr-3 text-xl text-blue-400" />
                        <span className="font-bold text-gray-500 hover:text-blue-400">
                            Files
                        </span>
                    </li>
                    <li className="flex items-center cursor-pointer">
                        <HiOutlineFlag className="mr-3 text-xl text-blue-400" />
                        <span className="font-bold text-gray-500 hover:text-blue-400">
                            Open a Dispute
                        </span>
                    </li>
                </ul>
            </div>

            {/* Image at Bottom */}
            <div className="mt-auto flex justify-center pb-4">
                <img
                    src={sidebarImage}
                    alt="Sidebar Placeholder"
                    className="w-60 rounded-lg object-cover mb-2"
                />
            </div>

            {/* Top-Right Corner Icons */}
            <div className="absolute top-4 right-4 flex space-x-4">
                <div className="w-10 h-10 border-2 border-blue-500 rounded-full flex items-center justify-center">
                    <FiActivity className="text-blue-500 text-xl" />
                </div>
                <div className="w-10 h-10 border-2 border-blue-500 rounded-full flex items-center justify-center">
                    <MdOutlineEventNote className="text-blue-500 text-xl" />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;