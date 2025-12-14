import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postLead } from "../feature/lead/LeadSlice";
import MenuBar from "./MenuBar";
import toast, { Toaster } from "react-hot-toast";

const LeadForm = ({ handleToggleMenu }) => {
  const [name, setName] = useState("");
  const [source, setSource] = useState("");
  const [salesAgent, setSalesAgent] = useState("");
  const [agents, setAgents] = useState([]);
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");
  const [timeToClose, setTimeToClose] = useState("");
  const [tags, setTags] = useState("");
  const [validation, setValidation] = useState({});

  const dispatch = useDispatch();
  const { leads, error } = useSelector((state) => state.leads);
  

  const onSubmitLead = (e) => {
    e.preventDefault();
    const errors = {};
    let leadData = {
      name: name,
      source: source,
      salesAgent: salesAgent,
      status: status,
      priority: priority,
      timeToClose,
      tags: tags,
    };

    if (!name) {
      errors["name"] = "Please provide the name";
    }
    if (!source) {
      errors["source"] = "Please provide the source";
    }
    if (!salesAgent) {
      errors["salesAgent"] = "Please provide the sales agent";
    }
    if (!status) {
      errors["status"] = "Please provide the status";
    }
    if (!priority) {
      errors["priority"] = "Please provide the priority";
    }
    if (!timeToClose) {
      errors["timeToClose"] = "Please provide the timeToClose";
    }
    if(isNaN(Number(timeToClose))){
      errors["timeToClose"] = "Please provide the number digit";
    }
    if (!tags) {
      errors["tags"] = "Please provide the tags";
    }

    setValidation(errors);

    if(Object.keys(errors).length > 0){
      return
    }

    if (name && source && salesAgent && status && priority && timeToClose) {
      dispatch(postLead(leadData));
      setName("");
      setSource("");
      setSalesAgent("");
      setStatus("");
      setPriority("");
      setTimeToClose("");
      setTags("");
      toast.success("Lead Added Successfully!", {
        duration: 3000,
        position: "top-right",
      });
    }
  };

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        let response = await fetch(
          "https://anvaya-crm-backend-w37z.vercel.app/agents"
        );
        let data = await response.json();
        setAgents(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAgents();
  }, []);

  return (
    <div className="right">
      <h1 className="main-title">
        <MenuBar handleMenuToggle={handleToggleMenu} />
        Anvaya CRM Dashboard
      </h1>
      <div className="main-sec">
        <div className="page-title">Add Lead</div>
        <div className="form-block">
          <Toaster />
          <form onSubmit={onSubmitLead}>
            <div style={{ marginBottom: "15px" }}>
              <label>Lead Name</label>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <p
                style={{
                  color: "red",
                  margin: "3px 0 0 0",
                  fontWeight: "bold",
                  fontSize: "12px",
                }}
              >
                {validation["name"]}
              </p>
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label>Lead Source</label>
              <select
                onChange={(e) => setSource(e.target.value)}
                value={source}
              >
                <option value="Website">Website</option>
                <option value="Referral">Referral</option>
                <option value="Cold Call">Cold Call</option>
              </select>
              <p
                style={{
                  color: "red",
                  margin: "3px 0 0 0",
                  fontWeight: "bold",
                  fontSize: "12px",
                }}
              >
                {validation["source"]}
              </p>
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label>Assigned Sales Agent</label>
              <select
                onChange={(e) => setSalesAgent(e.target.value)}
                value={salesAgent}
              >
                <option value="">Select Sales Agent</option>
                {agents.map((agent) => (
                  <option value={agent._id} key={agent._id}>
                    {agent.name}
                  </option>
                ))}
              </select>
              <p
                style={{
                  color: "red",
                  margin: "3px 0 0 0",
                  fontWeight: "bold",
                  fontSize: "12px",
                }}
              >
                {validation["salesAgent"]}
              </p>
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label>Lead Status</label>
              <select
                onChange={(e) => setStatus(e.target.value)}
                value={status}
              >
                <option value="New">New</option>
                <option value="Contacted">Contacted</option>
                <option value="Qualified">Qualified</option>
                <option value="Proposal Sent">Proposal Sent</option>
                <option value="Closed">Closed</option>
              </select>
              <p
                style={{
                  color: "red",
                  margin: "3px 0 0 0",
                  fontWeight: "bold",
                  fontSize: "12px",
                }}
              >
                {validation["status"]}
              </p>
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label>Priority </label>
              <select
                onChange={(e) => setPriority(e.target.value)}
                value={priority}
              >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
              <p
                style={{
                  color: "red",
                  margin: "3px 0 0 0",
                  fontWeight: "bold",
                  fontSize: "12px",
                }}
              >
                {validation["priority"]}
              </p>
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label>Time to Close</label>
              <input
                type="text"
                onChange={(e) => setTimeToClose(e.target.value)}
                value={timeToClose}
              />
              <p
                style={{
                  color: "red",
                  margin: "3px 0 0 0",
                  fontWeight: "bold",
                  fontSize: "12px",
                }}
              >
                {validation["timeToClose"]}
              </p>
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label>Tags </label>
              <select onChange={(e) => setTags(e.target.value)} value={tags}>
                <option value="High Value">High Value</option>
                <option value="Follow-up">Follow-up</option>
              </select>
              <p
                style={{
                  color: "red",
                  margin: "3px 0 0 0",
                  fontWeight: "bold",
                  fontSize: "12px",
                }}
              >
                {validation["tags"]}
              </p>
            </div>
            <button type="submit" className="btn btn-custom">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default LeadForm;
