import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useCookies } from 'react-cookie';

function Navbar() {

  const [cookies] = useCookies(['jwt']);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-500 fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo and links */}
          <div className="flex justify-between w-full">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/main" className="flex-shrink-0 text-white">
                Docs
              </a>
            </div>
            {/* Desktop menu */}
            <div className="hidden sm:flex sm:items-center">
              <div className="flex space-x-4">
                <p className="text-white px-3 py-2 rounded-md text-sm font-medium">
                  {cookies.jwt.accountId}
                </p>
                <a
                  href="/"
                  className="text-white hover:bg-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Link 1
                </a>
                <a
                  href="/"
                  className="text-white hover:bg-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Link 2
                </a>
                <a
                  href="/"
                  className="text-white hover:bg-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Link 3
                </a>
              </div>
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-blue-600 focus:outline-none focus:bg-blue-600 focus:text-white"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`sm:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href="/"
            className="text-white hover:bg-blue-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            Link 1
          </a>
          <a
            href="/"
            className="text-white hover:bg-blue-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            Link 2
          </a>
          <a
            href="/"
            className="text-white hover:bg-blue-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            Link 3
          </a>
          </div>
      </div>
    </nav>
  );
}

export default Navbar;