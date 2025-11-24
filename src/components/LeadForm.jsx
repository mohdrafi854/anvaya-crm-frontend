import { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { postLead } from "../feature/lead/LeadSlice";

const LeadForm = () => {
  const [name, setName] = useState("");
  const [source, setSource] = useState("");
  const [salesAgent, setSalesAgent] = useState("");
  const [agents, setAgents] = useState([]);
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");
  const [timeToClose, setTimeToClose] = useState("");
  const [tags, setTags] = useState("");
  const [inputError, setInputError] = useState("");
  const [msg, setMsg] = useState("");

  const dispatch = useDispatch();
  const { leads, error } = useSelector((state) => state.leads);

  const onSubmitLead = (e) => {
    e.preventDefault();
    let leadData = {
      name: name,
      source: source,
      salesAgent: salesAgent,
      status: status,
      priority: priority,
      timeToClose,
      tags: tags,
    };

  
    

    if (name && source && salesAgent && status && priority && timeToClose) {
      dispatch(postLead(leadData));
      setName("");
      setSource("");
      setSalesAgent("");
      setStatus("");
      setPriority("");
      setTimeToClose("");
      setTags("");
      setMsg("Added Lead Successfully");
    } else {
      setInputError("Please fill the required data");
    }
  };

  function showHideMsg() {
    setInputError("");
    setMsg("");
  }

  useEffect(() => {
    if (inputError) {
      setTimeout(() => {
        return showHideMsg();
      }, 2000);
    }

    const fetchAgents = async () => {
      try {
        let response = await fetch("https://anvaya-crm-backend-w37z.vercel.app/agents");
        let data = await response.json();
        setAgents(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAgents();
  }, [inputError]);

  return (
    <div className="right">
      <h1 className="main-title">Anvaya CRM Dashboard</h1>
      <div className="main-sec">
        <div className="page-title">Add Lead</div>
        <div className="form-block">
        {inputError && <strong style={{color:"red"}}>{inputError}</strong>}
        {msg && <strong style={{color:"green"}}>{msg}</strong>}
        <form onSubmit={onSubmitLead}>
          <div style={{ marginBottom: "15px" }}>
            <label>Lead Name</label>
            <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label>Lead Source</label>
            <select onChange={(e) => setSource(e.target.value)} value={source}>
              <option value="Website">Website</option>
              <option value="Referral">Referral</option>
              <option value="Cold Call">Cold Call</option>
            </select>
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label>Assigned Sales Agent</label>
            <select onChange={(e) => setSalesAgent(e.target.value)} value={salesAgent}>
              <option value="">Select Sales Agent</option>
              {agents.map((agent) => (
                <option value={agent._id} key={agent._id}>
                  {agent.name}
                </option>
              ))}
            </select>
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label>Lead Status</label>
            <select onChange={(e) => setStatus(e.target.value)} value={status}>
              <option value="New">New</option>
              <option value="Contacted">Contacted</option>
              <option value="Qualified">Qualified</option>
              <option value="Proposal Sent">Proposal Sent</option>
              <option value="Closed">Closed</option>
            </select>
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label>Priority </label>
            <select onChange={(e) => setPriority(e.target.value)} value={priority}>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label>Time to Close</label>
            <input
              type="text"
              onChange={(e) => setTimeToClose(e.target.value)} value={timeToClose}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label>Tags </label>
            <select onChange={(e) => setTags(e.target.value)} value={tags}>
              <option value="High Value">High Value</option>
              <option value="Follow-up">Follow-up</option>
            </select>
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
