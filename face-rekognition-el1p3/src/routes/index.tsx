import { Routes, Route } from "react-router-dom";
// import { Home } from "../pages/home";
import Home from "../pages/home";
import Login from "../pages/login";
import Rekognition from "../pages/rekognition";

const routes = [
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/rekognition",
    element: <Rekognition />,
  },

];

function RoutesConfig() {
  return (
    <Routes>
      {routes.map((r, index) => (
        <Route path={r.path} element={r.element} key={index} />
      ))}
    </Routes>
  );
}

export default RoutesConfig;
