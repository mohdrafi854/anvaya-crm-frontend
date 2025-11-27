import AddSalesAgent from "../components/AddAgentForm";
import MenuBar from "../components/MenuBar";

const Agents = ({ handleMenuToggle }) => {
  return (
    <div className="right">
      <h1 className="main-title">
        <MenuBar handleMenuToggle={handleMenuToggle} />
        Anvaya CRM Dashboard
      </h1>
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
