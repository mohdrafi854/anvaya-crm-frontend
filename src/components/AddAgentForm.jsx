import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
const AddSalesAgent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [formError, setFormError] = useState({});

  const handleAddAgent = async (e) => {
    e.preventDefault();
    const newError = {};

    if (!name) {
      newError["name"] = "Name is required";
    }

    if (!email) {
      newError["email"] = "Email is required";
    }

    setFormError(newError);

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
      toast.success("Agent Added Successfully!", {
        duration: 3000,
        position: "top-right",
      });
    } catch (error) {
      toast.error("Agent not added", {
        duration: 3000,
        position: "top-right",
      });
      console.error("Server Error", error.message);
    }
  };
  return (
    <>
      {/* {formError && <strong style={{ color: "red" }}>{formError}</strong>}
      {msg && <strong style={{ color: "green" }}>{msg}</strong>} */}
      <Toaster />
      <form onSubmit={handleAddAgent}>
        <div style={{ marginBottom: "10px" }}>
          <label>Agent Name:</label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          {formError["name"] && (
            <p
              style={{
                color: "red",
                fontSize: "12px",
                fontWeight: "bold",
                margin: "3px 0 0 0",
              }}
            >
              {formError["name"]}
            </p>
          )}
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Email Address:</label>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          {formError["email"] && (
            <p
              style={{
                color: "red",
                fontSize: "12px",
                fontWeight: "bold",
                margin: "3px 0 0 0",
              }}
            >
              {formError["email"]}
            </p>
          )}
        </div>
        <button type="submit" className="btn btn-custom">
          Submit
        </button>
      </form>
    </>
  );
};
export default AddSalesAgent;
