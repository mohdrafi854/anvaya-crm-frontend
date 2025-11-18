import { useState } from "react";
import axios from "axios";
const AddSalesAgent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [formError, setFormError] = useState("");
  const [msg, setMsg] = useState("");

  const handleAddAgent = async (e) => {
    e.preventDefault();

    setFormError("");
    setMsg("");

    if (!name || !email) {
      setFormError("All fields are required");
      return;
    }

    const formData = {
      name,
      email,
    };

    try {
      await axios.post(
        "https://anvaya-crm-backend-w37z.vercel.app/agents",
        formData
      );

      setName("");
      setEmail("");
      setMsg("Sales Agent Added Successfully");

      setTimeout(() => {
        setMsg("");
      }, 3000)

    } catch (error) {
      setFormError("Server Error. Try again!");
      console.error("Server Error", error.message);
    }
  };
  return (
    <>
      {formError && <strong style={{ color: "red" }}>{formError}</strong>}
      {msg && <strong style={{ color: "green" }}>{msg}</strong>}
      <form onSubmit={handleAddAgent}>
        <div style={{ marginBottom: "10px" }}>
          <label>Agent Name:</label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Email Address:</label>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <button type="submit" className="btn btn-custom">
          Submit
        </button>
      </form>
    </>
  );
};
export default AddSalesAgent;
