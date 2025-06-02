import { useSelector, useDispatch } from "react-redux";
import { fetchAgentList } from "../feature/agent/AgentSlice";
import { useEffect } from "react";
import { Link } from "react-router";

const Agents = () => {
  const dispatch = useDispatch();
  const { agent, status, error } = useSelector((state) => state.agent);

  useEffect(() => {
    dispatch(fetchAgentList());
  }, []);
  return (
    <div className="right">
      {status === "Loading" && <p>Loading...</p>}
      {error && <p>error</p>}
      <h6>Sales Agent List </h6>
      <ul className="list-agent">
        {agent.map((ag) => (
          <li style={{ marginBottom: "4px" }}>
            Agent : {ag.name} - {ag.email}
          </li>
        ))}
      </ul>
      <Link className="btn btn-custom" to="/addAgent">
        Add New Agent
      </Link>
    </div>
  );
};
export default Agents;
