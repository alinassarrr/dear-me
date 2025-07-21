import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home/Home";
import Create from "../pages/Create/Create";
import Profile from "../pages/Profile/Profile";
import Public from "../pages/PublicWall/Public";
import Auth from "../pages/Auth/Auth";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/signup" element={<Auth />} />
        <Route path="/public" element={<Public />} />
        <Route path="/create" element={<Create />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default Routing;
