import { useState } from "react";
const AddSalesAgent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div className="right">
      <h4>Add New Sales Agent</h4>
      <form>
        <div style={{ marginBottom: "10px" }}>
          <label>Agent Name:</label>
          <input type="text" onChange={(e) => setName(e.target.value)} />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Email Address:</label>
          <input type="text" />
        </div>
        <button type="submit" class="btn btn-custom">
          Submit
        </button>
      </form>
    </div>
  );
};
export default AddSalesAgent;
