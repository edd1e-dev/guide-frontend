import React from 'react'
import "./Header.css"
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  return (
    <div>
      <div className="header">
        <span className='logo'>Develop Guide</span>
        <nav className='header_nav'>
          <a href="/logout" class="link_logout">Logout</a>
          <FontAwesomeIcon icon={faSearch} className="search" />
        </nav>
        <FontAwesomeIcon icon={faBars} className="bars" />
      </div>
      <div className="tab">
      </div>
      <div className="path">
        <p>Docs &gt; Wondaeri &gt;</p>
        <p className="current_path">Overview</p>
      </div>
      <div className="container"></div>
    </div>
  )
}