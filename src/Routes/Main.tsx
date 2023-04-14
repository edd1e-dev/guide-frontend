import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Common/Navbar'
import SearchBanner from '../Components/Main/SearchBanner'
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import PlatformList from '../Components/Main/PlatformList';
import { url } from '../Config/config';
import { useQuery } from '@tanstack/react-query';
import { fetchPlatforms } from '../api';

export default function Main() {
  const navigate = useNavigate();

  const [cookies] = useCookies(['jwt']);
  const [platforms, setPlatforms] = useState([]);

  useQuery(["main"], () => {
    const jwt = cookies.jwt;
    const auth = `${jwt.grantType} ${jwt.accessToken}`;
    return fetchPlatforms(auth);
  }, {
    onSuccess: (data) => {
      if (data.errorCode === 1104) {
        navigate("/");
        return;
      }

      setPlatforms(data);
    },
    onError: () => {
      console.log("오류가 발생하였습니다.");
    },
  }
  );

  return (
    <>
      <Navbar />
      <SearchBanner />
      <PlatformList
        platforms={platforms}
      />
    </>
  )
}
