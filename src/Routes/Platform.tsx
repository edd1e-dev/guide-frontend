import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../Components/Common/Navbar';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import Sidebar from '../Components/Docs/Sidebar';
import { url } from '../Config/config';

export default function Platform() {
  const [cookies] = useCookies(['jwt']);
  let { platform } = useParams();
  const [sidebarItems, setSidebarItems] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);
  const [targetDocument, setTargetDocument] = useState({});

  const handleSidebar = () => {
    setShowSidebar((current) => !current)
  }

  useEffect(() => {
    (async () => {
      const jwt = cookies.jwt;
      const auth = jwt.grantType + " " + jwt.accessToken;

      const result = await (await axios({
        method: 'get',
        url: `${url}/categories/${platform}`,
        headers: {
          Authorization: auth
        }
      })).data;

      setSidebarItems(result);
      setTargetDocument(result[0]?.documents[0])
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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