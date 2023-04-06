import React, { useState } from 'react'
import "./Header.css"
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {

  const [userId, setUserId] = useState("");

  return (
    <div>
      {/* Navbar */}
      <nav className="header">
        <span className='logo'>Develop Guide</span>
        {/* Header */}
        <section className='header__nav'>
          <span class="header__nav__user">sangwoo98.kang@gmail.com</span>
          <FontAwesomeIcon icon={faSearch} className="search" />
        </section>
        {/* Toggle */}
        <FontAwesomeIcon icon={faBars} className='header__toggle' />
      </nav>
    </div>
  )
}