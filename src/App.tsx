import { Route, Routes } from "react-router-dom";
import Login from "./Routes/Login";
import NotFound from "./Routes/NotFound";
import PrivateRoute from "./Routes/PrivateRoute";
import Main from "./Routes/Main";
import Platform from './Routes/Platform';
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import Platform from "./Routes/Platform";

const App = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/main" element={<PrivateRoute />} >
            <Route index element={<Main />} />
          </Route>
          <Route path="/platform/:platform" element={<Platform />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ReactQueryDevtools initialIsOpen={true} />
      </>
  );
}

export default App;
