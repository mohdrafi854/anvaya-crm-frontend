import AddSalesAgent from "../components/AddAgentForm";

const Agents = () => {

  return (
    <div className="right">
     <h1 className="main-title">Anvaya CRM Dashboard</h1>
     <div className="main-sec">
      <div className="page-title">Add New Sales Agent</div>
      <div className="form-block">
        <AddSalesAgent />
      </div>
      
     </div>
      

    </div>
  );
};
export default Agents;
