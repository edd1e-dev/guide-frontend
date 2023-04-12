import { Route, Routes } from "react-router-dom";
import Login from "./Routes/Login";
import NotFound from "./Routes/NotFound";
import PrivateRoute from "./Routes/PrivateRoute";
import Main from "./Routes/Main";
import Platform from './Routes/Platform';
// import Platform from "./Routes/Platform";

const App = () => {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/main" element={<PrivateRoute />} >
            <Route index element={<Main />} />
          </Route>
          <Route path="/platform/:platform" element={<Platform />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
    </div>
  );
}

export default App;
