import { useSelector, useDispatch } from "react-redux";
import { fetchAgentList } from "../feature/agent/AgentSlice";
import { useEffect } from "react";
import { Link } from "react-router";
import MenuBar from "../components/MenuBar";

const Sales = ({handleMenuToggle}) => {
  const dispatch = useDispatch();
  const { agent, status, error } = useSelector((state) => state.agent);

  useEffect(() => {
    dispatch(fetchAgentList());
  }, [dispatch]);
  return (
    <div className="right">
      <h1 className="main-title">
        <MenuBar handleMenuToggle={handleMenuToggle}/>
        Anvaya CRM Dashboard
        </h1>
      <div className="main-sec">
        <div className="page-title">Sales Agents</div>
        {status === "Loading" && <p>Loading...</p>}
        {error && <p>error</p>}
        <div className="table-block">
          <table className="table">
            <thead>
              <tr>
                <th>Agent</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {agent.map((ag, index) => (
                <>
                  <tr key={index}>
                    <td>{ag.name}</td>
                    <td>{ag.email}</td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
        <Link className="btn btn-custom" to="/agents" style={{marginTop:"20px"}}>
          Add New Agent
        </Link>
      </div>
    </div>
  );
};
export default Sales;
