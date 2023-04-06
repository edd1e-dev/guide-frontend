import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import "../../styles/Sidebar.css"
import Document from './Document';

function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleSidebar = () => {
    setShowSidebar((current) => !current)
  }

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className={`sidebar fixed overflow-y-auto bg-slate-50 text-white mt-16 w-64 pb-5 md:block ${showSidebar ? 'block' : 'hidden'}`}>
        <div className="p-2 ml-2">
          <button className={`mt-3 mb-6 text-black md:hidden ${showSidebar ? 'block' : 'hidden'}`} onClick={handleSidebar}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <h1 className="text-xl text-black font-bold">Sidebar</h1>
          <ul className="mt-4">
            <li className="py-2">
              <a href="#" className="text-gray-400 hover:text-white">Link 1</a>
            </li>
            <li className="py-2">
              <a href="#" className="text-gray-400 hover:text-white">Link 2</a>
            </li>
            <li className="py-2">
              <a href="#" className="text-gray-400 hover:text-white">Link 3</a>
            </li>
          </ul>
          <h1 className="text-xl text-black font-bold">Sidebar</h1>
          <ul className="mt-4">
            <li className="py-2">
              <a href="#" className="text-gray-400 hover:text-white">Link 1</a>
            </li>
            <li className="py-2">
              <a href="#" className="text-gray-400 hover:text-white">Link 2</a>
            </li>
            <li className="py-2">
              <a href="#" className="text-gray-400 hover:text-white">Link 3</a>
            </li>
          </ul>
          <h1 className="text-xl text-black font-bold">Sidebar</h1>
          <ul className="mt-4">
            <li className="py-2">
              <a href="#" className="text-gray-400 hover:text-white">Link 1</a>
            </li>
            <li className="py-2">
              <a href="#" className="text-gray-400 hover:text-white">Link 2</a>
            </li>
            <li className="py-2">
              <a href="#" className="text-gray-400 hover:text-white">Link 3</a>
            </li>
          </ul>
          <h1 className="text-xl text-black font-bold">Sidebar</h1>
          <ul className="mt-4">
            <li className="py-2">
              <a href="#" className="text-gray-400 hover:text-white">Link 1</a>
            </li>
            <li className="py-2">
              <a href="#" className="text-gray-400 hover:text-white">Link 2</a>
            </li>
            <li className="py-2">
              <a href="#" className="text-gray-400 hover:text-white">Link 3</a>
            </li>
          </ul>
          <h1 className="text-xl text-black font-bold">Sidebar</h1>
          <ul className="mt-4">
            <li className="py-2">
              <a href="#" className="text-gray-400 hover:text-white">Link 1</a>
            </li>
            <li className="py-2">
              <a href="#" className="text-gray-400 hover:text-white">Link 2</a>
            </li>
            <li className="py-2">
              <a href="#" className="text-gray-400 hover:text-white">Link 3</a>
            </li>
          </ul>
          <h1 className="text-xl text-black font-bold">Sidebar</h1>
          <ul className="mt-4">
            <li className="py-2">
              <a href="#" className="text-gray-400 hover:text-white">Link 1</a>
            </li>
            <li className="py-2">
              <a href="#" className="text-gray-400 hover:text-white">Link 2</a>
            </li>
            <li className="py-2">
              <a href="#" className="text-gray-400 hover:text-white">Link 3</a>
            </li>
          </ul>
        </div>
      </div>

      <Document
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        handleSidebar={handleSidebar}
      />
    </div>
  );
}

export default Sidebar;