import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Leads from "./Leads";
import Sales from "./Sales";
import Agents from "./Agents";
import Reports from "./Reports";
import Settings from "./Settings";
import LeadDetails from "../components/LeadDetails";
import LeadForm from "../components/LeadForm";
import LeadStatusView from "../components/LeadStatusView";
import EditLeadForm from "../components/EditLeadForm";
import Login from "./Login";
import Signup from "./Signup";
import { useState } from "react";
const AppRoutes = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleSidebarToggle = () => {
    setIsOpen(!isOpen);
  };
  const { pathname } = useLocation();
  const showSidebar = pathname !== "/" && pathname !== "/signup";

  return (
    <>
      {showSidebar && <Sidebar isOpen={isOpen} />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />
        <Route
          path="/home"
          element={<Leads handleMenuToggle={handleSidebarToggle} />}
        />
        <Route
          path="/lead/:id"
          element={<LeadDetails handleMenuToggle={handleSidebarToggle} />}
        />
        <Route
          path="/addLead"
          element={<LeadForm handleToggleMenu={handleSidebarToggle} />}
        />
        <Route
          path="/editLead/:id"
          element={<EditLeadForm handleMenuToggle={handleSidebarToggle} />}
        />
        <Route path="/lead/statusView" element={<LeadStatusView />} />
        <Route
          path="/sales"
          element={<Sales handleMenuToggle={handleSidebarToggle} />}
        />
        <Route
          path="/agents"
          element={<Agents handleMenuToggle={handleSidebarToggle} />}
        />
        <Route
          path="/reports"
          element={<Reports handleMenuToggle={handleSidebarToggle} />}
        />
        <Route
          path="/settings"
          element={<Settings handleMenuToggle={handleSidebarToggle} />}
        />
      </Routes>
    </>
  );
};
const Dashboard = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
};
export default Dashboard;
