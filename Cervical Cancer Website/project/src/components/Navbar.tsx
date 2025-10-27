import React from 'react';
import { NavLink } from 'react-router-dom';
import { Microscope } from 'lucide-react';

function Navbar() {
  return (
    <nav className="bg-gray-900/50 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="flex items-center space-x-2">
            <Microscope className="w-8 h-8 text-blue-500" />
            <span className="text-xl font-bold">CervicalCare AI</span>
          </NavLink>
          
          <div className="flex space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-blue-400 transition-colors ${isActive ? 'text-blue-500' : 'text-gray-300'}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/project"
              className={({ isActive }) =>
                `hover:text-blue-400 transition-colors ${isActive ? 'text-blue-500' : 'text-gray-300'}`
              }
            >
              Project
            </NavLink>
            <NavLink
              to="/detection"
              className={({ isActive }) =>
                `hover:text-blue-400 transition-colors ${isActive ? 'text-blue-500' : 'text-gray-300'}`
              }
            >
              Detection
            </NavLink>
            <NavLink
              to="/team"
              className={({ isActive }) =>
                `hover:text-blue-400 transition-colors ${isActive ? 'text-blue-500' : 'text-gray-300'}`
              }
            >
              Team
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;