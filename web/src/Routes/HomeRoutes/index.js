import { Routes, Route, useNavigate } from "react-router-dom";
import { DashboardPage, SettingsPage } from "../../Pages/Home";
import { Sidebar } from '../../Layout';

export default function HomeRoutes() {
  const navigate = useNavigate();
  return (
    <Sidebar>
      <Routes navigate={navigate}>
        <Route exact path="/" element={<DashboardPage />} />
        <Route exact path="/settings" element={<SettingsPage />} />
      </Routes>
    </Sidebar>
  )
}
