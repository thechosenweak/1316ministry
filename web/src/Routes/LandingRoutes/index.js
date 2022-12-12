import { Routes, Route, useNavigate } from "react-router-dom";
import { LoginPage } from "../../Pages/Landing";

export default function LandingRoutes() {
  const navigate = useNavigate();
  return (
    <Routes navigate={navigate}>
      <Route exact path="/" element={<LoginPage />} />
    </Routes>
  )
}
