import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Public from "../pages/Public";
import Create from "../pages/Create";
import Profile from "../pages/Profile";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/public" element={<Public />} />
        <Route path="/create" element={<Create />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default Routing;
