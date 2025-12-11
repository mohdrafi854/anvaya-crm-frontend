import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validation, setValidation] = useState({});
  const [togglePwd, setTogglePwd] = useState(false);
  const [toggleCrmPwd, setToggleCrmPwd] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    const newValidation = {};
    if (!name) {
      newValidation["name"] = "Please provide the name";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      newValidation["email"] = "Please provide the valid email";
    } else if (!emailRegex.test(email)) {
      newValidation["email"] = "Please enter a valid email format";
    }
    if (!password) {
      newValidation["password"] = "Please provide the password";
    }
    if (!confirmPassword) {
      newValidation["confirmPassword"] = "Please provide the confirm password";
    }

    if (password && confirmPassword && password !== confirmPassword) {
      newValidation["confirmPassword"] = "Password do not match";
    }

    setValidation(newValidation);

    const data = {
      name,
      email,
      password,
      confirmPassword,
    };

    try {
      await axios.post("https://anvaya-crm-backend-w37z.vercel.app/signup", data);
    } catch (error) {
      console.error(error);
    }
  };
  const handleTogglePwd = () => {
    setTogglePwd(!togglePwd);
  };

  const handleToggleConfirmPwd = () => {
    setToggleCrmPwd(!toggleCrmPwd);
  };
  return (
    <>
      <div className="box-center">
        <div className="login-box login-box-bg">
          <h1>
            Anvaya CRM
            <span className="sm-text">Create Your Account</span>
          </h1>
          <form onSubmit={handleSignup}>
            <div className="input-block">
              <label htmlFor="">Full Name</label>
              <input
                type="text"
                className="login-control"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {validation["name"] && (
                <p
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    fontSize: "12px",
                    margin: "3px 0 0 0",
                  }}
                >
                  {validation["name"]}
                </p>
              )}
            </div>
            <div className="input-block">
              <label htmlFor="">Email Address</label>
              <input
                type="text"
                className="login-control"
                placeholder="Enter your email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {validation["email"] && (
                <p
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    fontSize: "12px",
                    margin: "3px 0 0 0",
                  }}
                >
                  {validation["email"]}
                </p>
              )}
            </div>
            <div className="input-block">
              <label htmlFor="">Password</label>
              <div className="input-block-wrap">
                <input
                  type={`${togglePwd === false ? "password" : "text"}`}
                  className="login-control"
                  placeholder="Enter your password"
                  value={password}
                  autoComplete="new-password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <i
                  className={`fa-regular ${
                    togglePwd === false ? "fa-eye" : "fa-eye-slash"
                  } fa-eye-pos`}
                  onClick={() => handleTogglePwd()}
                ></i>
              </div>
              {validation["password"] && (
                <p
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    fontSize: "12px",
                    margin: "3px 0 0 0",
                  }}
                >
                  {validation["password"]}
                </p>
              )}
            </div>
            <div className="input-block">
              <label htmlFor="">Confirm Password</label>
              <div className="input-block-wrap">
                <input
                  type={`${toggleCrmPwd === false ? "password" : "text"}`}
                  className="login-control"
                  value={confirmPassword}
                  autoComplete="new-password"
                  placeholder="Confirm your password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <i
                  className={`fa-regular ${
                    toggleCrmPwd === false ? "fa-eye" : "fa-eye-slash"
                  } fa-eye-pos`}
                  onClick={handleToggleConfirmPwd}
                ></i>
              </div>
              {validation["confirmPassword"] && (
                <p
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    fontSize: "12px",
                    margin: "3px 0 0 0",
                  }}
                >
                  {validation["confirmPassword"]}
                </p>
              )}
            </div>

            <button type="submit" className="btn btn-custom btn-logIn">
              Create Account
            </button>
          </form>
          <span style={{ display: "block", marginTop: "15px" }}>
            Already have an account?{" "}
            <Link to={`/`} className="forgot-link">
              Log in
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};
export default Signup;
