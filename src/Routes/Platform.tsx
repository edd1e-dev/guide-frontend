import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../Components/Common/Navbar';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import Sidebar from '../Components/Docs/Sidebar';
import { url } from '../Config/config';
import { useQuery } from '@tanstack/react-query';
import { fetchCategories, fetchPlatforms } from '../api';

export default function Platform() {
  const navigate = useNavigate();
  const [cookies] = useCookies(['jwt']);
  let { platform } = useParams();
  const [sidebarItems, setSidebarItems] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);
  const [targetDocument, setTargetDocument] = useState({});

  const handleSidebar = () => {
    setShowSidebar((current) => !current)
  }

  useQuery(["categories", platform], () => {
    const jwt = cookies.jwt;
    const auth = `${jwt.grantType} ${jwt.accessToken}`;
    return fetchCategories(auth, platform);
  }, {
    onSuccess: (data: any) => {
      if (data.errorCode === 1104) {
        navigate("/");
        return;
      }

      setSidebarItems(data);
      setTargetDocument(data[0]?.documents[0])
    },
    onError: () => {
      console.log("오류가 발생하였습니다.");
    },
  }
  );

  return (
    <div>
      <Navbar />
      <Sidebar
        targetDocument={targetDocument}
        setTargetDocument={setTargetDocument}
        sidebarItems={sidebarItems}
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        handleSidebar={handleSidebar}
      />
    </div>
  )
}