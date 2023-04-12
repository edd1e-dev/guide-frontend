import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from "../../Styles/Sidebar.module.css"
import axios from 'axios';
import { useCookies } from 'react-cookie';
import Document from './Document';

interface SidebarProps {
  targetDocument: object;
  setTargetDocument: React.Dispatch<React.SetStateAction<object>>;
  sidebarItems: CategoryProps[];
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  handleSidebar: () => void;
}

interface CategoryProps {
  categoryId: number;
  title: string;
  documents: DocumentProps[];
}

interface DocumentProps {
  documentId: number;
  title: string;
}

function Sidebar({ targetDocument, setTargetDocument, sidebarItems, showSidebar, setShowSidebar, handleSidebar }: SidebarProps) {

  const [cookies] = useCookies(['jwt']);

  const handleTitle = async (id: number) => {
    const jwt = cookies.jwt;
    const auth = jwt.grantType + " " + jwt.accessToken;

    const result = await (await axios({
      method: 'get',
      url: `http://localhost:8080/document/${id}`,
      headers: {
        Authorization: auth
      }
    })).data;

    setTargetDocument(result);
  }

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className={`${styles.sidebar} fixed overflow-y-auto bg-slate-50 text-white mt-16 w-64 pb-5 md:block ${showSidebar ? 'block' : 'hidden'}`}>
        <div className="p-2 ml-2">
          <button className={`mt-3 mb-6 text-black md:hidden ${showSidebar ? 'block' : 'hidden'}`} onClick={handleSidebar}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          {sidebarItems.map((category: CategoryProps) =>
            <div key={category.categoryId}>
              <h1 className="text-xl text-black font-bold">{category.title}</h1>

              <ul className="mt-4 mb-4">
                {category.documents.map((document) =>
                  <li className="text-black" key={document.documentId}>
                    <span onClick={() => handleTitle(document.documentId)}>{document.title}</span>
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>

      <Document
        targetDocument={targetDocument}
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        handleSidebar={handleSidebar}
      />

    </div>
  );
}

export default Sidebar;