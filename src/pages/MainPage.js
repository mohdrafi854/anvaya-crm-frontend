import { BrowserRouter, Routes, Route } from "react-router";
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
import { useState } from "react";
const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleSidebarToggle = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div className="container">
      
      <BrowserRouter>
        <Sidebar isOpen={isOpen} />
        <Routes>
          <Route path="/" element={<Leads handleMenuToggle={handleSidebarToggle} />} />
          <Route path="/lead/:id" element={<LeadDetails handleMenuToggle={handleSidebarToggle} />} />
          <Route path="/addLead" element={<LeadForm handleToggleMenu={handleSidebarToggle} />} />
          <Route path="/editLead/:id" element={<EditLeadForm handleMenuToggle={handleSidebarToggle} />} />
          <Route path="/lead/statusView" element={<LeadStatusView />} />
          <Route path="/sales" element={<Sales handleMenuToggle={handleSidebarToggle} />} />
          <Route path="/agents" element={<Agents handleMenuToggle={handleSidebarToggle} />} />
          <Route path="/reports" element={<Reports handleMenuToggle={handleSidebarToggle} />} />
          <Route path="/settings" element={<Settings handleMenuToggle={handleSidebarToggle} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default Dashboard;
