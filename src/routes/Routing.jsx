import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Login from "../pages/Login";
import Home from "../pages/Home";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default Routing;
