import React from 'react'
import Header from './Header'
import Path from './Path'
import Sidebar from './Sidebar'
import "./Docs.css"
import Document from './Document'

export default function Docs() {
  return (
    <div>
        <Header />
        <Path />
        <section className="container">
            <Sidebar />
            <Document />
        </section>
    </div>
  )
}
