import "./App.css"
import { Route, Routes, Outlet, Navigate } from "react-router-dom";
import Login from "./components/User/Login";
import NotFound from "./components/Common/NotFound";
import PrivateRoute from "./components/Common/PrivateRoute";
import Main from "./components/Main/Main";
import Docs from "./components/Docs/Service";

const App = () => {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/main" element={<PrivateRoute />} >
            <Route index element={<Main />} />
          </Route>
          <Route path="/docs/:service" element={<Docs />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
    </div>
  );
}

export default App;
