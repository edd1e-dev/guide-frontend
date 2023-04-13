import axios from 'axios';
import React, {useState} from 'react'
import ErrorModal from '../Components/Common/ErrorModal';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { url } from '../Config/config';

export default function Login() {

  const navigate = useNavigate();

  const [accountId, setAccountId] = useState("");
  const [password, setPassword] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [, setCookie] = useCookies(['jwt']);

  const doLogin = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!accountId.length) {
      setErrorMessage("아이디를 입력해주세요.");
      setShowModal(true);
      return;
    }

    if (!password.length) {
      setErrorMessage("비밀번호를 입력해주세요.");
      setShowModal(true);
      return;
    }

    const request = await axios({
      method: 'post',
      url: `${url}/user/auth`,
      data: {
        accountId: accountId,
        password: password
      }
    });

    if (request.data.errorCode !== undefined) {
      setErrorMessage(request.data.errorMessage);
      setShowModal(true);
      return;
    }

    setCookie('jwt', request.data);
    navigate('/main');
  }

  const handleAccountId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccountId(e.target.value);
  }

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  return (
    <div className="h-screen w-screen">
      <div className="flex items-center justify-center h-screen">
        <div className="max-w-sm w-96 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <form>
            <div className="mb-6">
              <label htmlFor="account-id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">아이디</label>
              <input type="input" id="account-id" onChange={handleAccountId} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">비밀번호</label>
              <input type="password" id="password" onChange={handlePassword} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <button type="submit" onClick={doLogin} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">로그인</button>
          </form>
        </div>
      </div>
      <ErrorModal
        showModal={showModal}
        setShowModal={setShowModal}
        errorMessage={errorMessage}
      />
    </div>
  )
}
