import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import("./pages/home/HomePage"));
const Login = lazy(() => import("./pages/login/Login"));
const Profile = lazy(() => import("./pages/profile/Profile"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
