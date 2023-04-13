import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Common/Navbar'
import SearchBanner from '../Components/Main/SearchBanner'
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import PlatformList from '../Components/Main/PlatformList';
import { url } from '../Config/config';

export default function Main() {
  const navigate = useNavigate();

  const [cookies] = useCookies(['jwt']);
  const [platforms, setPlatforms] = useState([]);

  useEffect(() => {
    (async () => {
      const jwt = cookies.jwt;
      const auth = jwt.grantType + " " + jwt.accessToken;

      const result = await (await axios({
        method: 'get',
        url: `${url}/platforms`,
        headers: {
          Authorization: auth
        }
      })).data;

      if (result.errorCode === 1104) {
        navigate("/");
        return;
      }

      setPlatforms(result);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
