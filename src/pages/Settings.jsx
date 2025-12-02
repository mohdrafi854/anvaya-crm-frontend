import { useEffect } from "react";
import MenuBar from "../components/MenuBar";
import {
  fetchLeads,
  fetchAgents,
  deleteLead,
  deleteAgent,
} from "../feature/setting/settingSlice";
import { useDispatch, useSelector } from "react-redux";
const Settings = ({ handleMenuToggle }) => {
  const dispatch = useDispatch();
  const { setting, agents, status, error } = useSelector(
    (state) => state.settings
  );

  useEffect(() => {
    dispatch(fetchLeads());
    dispatch(fetchAgents());
  }, [dispatch]);

  const handleLeadsDelete = (id) => {
    try {
      dispatch(deleteLead(id));
    } catch (error) {
      console.error("Error Delete item", error);
    }
  };
  const handleAgentDelete = (id) => {
    try {
      dispatch(deleteAgent(id));
    } catch (error) {
      console.error("Error Delete Agent");
    }
  };

  return (
    <div className="right">
      <h1 className="main-title">
        <MenuBar handleMenuToggle={handleMenuToggle} />
        Anvaya CRM Dashboard
      </h1>
      <div className="main-sec">
        <div className="page-title">Settings</div>
        <div className="lead-block lead-block-fixed">
          {status === "loading" && <p>Loading</p>}
          {error && <p>{error}</p>}
          <h5 className="block-title">All Leads</h5>
          <ul className="list-unstyled">
            {setting.map((item) => (
              <li className="leads-list" key={item._id}>
                {item.name}
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleLeadsDelete(item._id)}
                >
                  <i className="fa fa-trash"></i>&nbsp;Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="lead-block lead-block-fixed"
          style={{ marginTop: "3%", marginBottom: "5%" }}
        >
          {status === "loading" && <p>Loading</p>}
          {error && <p>{error}</p>}
          <h5 className="block-title">All Agents</h5>
          <ul className="list-unstyled">
            {agents.map((item) => (
              <li className="leads-list" key={item._id}>
                {item.name}
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleAgentDelete(item._id)}
                >
                  <i className="fa fa-trash"></i>&nbsp;Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Settings;
