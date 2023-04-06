import React, { useEffect, useMemo, useState } from 'react'
import Navbar from '../Common/Navbar'
import SearchBanner from './SearchBanner'
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import ServiceList from './ServiceList';

export default function Main() {
  const navigate = useNavigate();

  const [cookies] = useCookies(['jwt']);
  const [services, setServices] = useState([]);

  useMemo(() => {
    const fetchData = async () => {
      const jwt = cookies.jwt;
      const auth = jwt.grantType + " " + jwt.accessToken;

      const request = await axios({
        method: 'get',
        url: 'http://localhost:8080/platforms',
        headers: {
          Authorization: auth
        }
      });

      const result = request.data;
      if (result.errorCode === 1104) {
        navigate("/");
        return;
      }

      setServices(result);
    }
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <SearchBanner />
      <ServiceList 
        services={services}
      />
    </div>
  )
}
