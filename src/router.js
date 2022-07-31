import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import Map from "./pages/Map";
import Section from "./pages/Section";
import CityList from "./pages/CityList";
function Router() {
  return (
    <BrowserRouter>
      <Link to="login">Login</Link>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="section" element={<Section />}></Route>
        <Route path="map" element={<Map />}></Route>
        <Route path="list" element={<CityList />}></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
