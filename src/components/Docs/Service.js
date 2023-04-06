import React from 'react'
import Sidebar from './Sidebar'
import {useLocation} from 'react-router-dom';
import Navbar from '../Common/Navbar';

export default function Service() {
  const location = useLocation();

  console.log(location.state.service);

  return (
    <div>
        <Navbar />
        <Sidebar />
    </div>
  )
}