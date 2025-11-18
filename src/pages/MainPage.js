import { BrowserRouter, Routes, Route } from "react-router";
import Sidebar from "../components/Sidebar";
import Leads from "./Leads";
import Sales from "./Sales";
import Agents from "./Agents";
import Reports from "./Reports";
import Settings from "./Settings";
import LeadDetails from "../components/LeadDetails";
import LeadForm from "../components/LeadForm";
import AddSalesAgent from "../components/AddAgentForm";
import LeadStatusView from "../components/LeadStatusView";
const Dashboard = () => {
  return (
    <div className="container">
      
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Leads />} />
          <Route path="/lead/:id" element={<LeadDetails />} />
          <Route path="/addLead" element={<LeadForm />} />
          <Route path="/lead/statusView" element={<LeadStatusView />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/addAgent" element={<AddSalesAgent />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default Dashboard;
