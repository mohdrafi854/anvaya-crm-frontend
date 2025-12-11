import axios from "axios";
import { useState } from "react";
import { Link } from "react-router";
import { useNavigate } from "react-router";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validation, setValidation] = useState({});
  const navigate = useNavigate();

  const handleLogin = async(e) => {
    e.preventDefault();
    const newValidation = {};
    

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      newValidation["email"] = "Please provide the email id";
    }else if(!emailRegex.test(email)){
        newValidation["email"] = "Please provide the valid email"
    }
    if (!password) {
      newValidation["password"] = "Please provide the password";
    }
    setValidation(newValidation);

    const data = {
        email, password
    }

    try {
        await axios.post("https://anvaya-crm-backend-w37z.vercel.app/login", data);
        navigate("/home")
    } catch (error) {
        console.error(error);
    }

    
  };

  return (
    <>
      <div className="box-center">
        <div className="login-box login-box-bg">
          <h1>Sign in to your account</h1>
          <p style={{ textAlign: "center" }}>
            Welcome back! Please enter your details.
          </p>
          <form onSubmit={handleLogin}>
            <div className="input-block">
              <label htmlFor="">Email Address</label>
              <input
                type="text"
                className="login-control"
                value={email}
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              {validation["email"] && (
                <p
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    margin: "3px 0 0 0",
                    fontSize:"12px",
                  }}
                >
                  {validation["email"]}
                </p>
              )}
            </div>
            <div className="input-block">
              <label htmlFor="">Password</label>
              <input
                type="text"
                className="login-control"
                value={password}
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {validation["password"] && (
                <p
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    margin: "3px 0 0 0",
                    fontSize:"12px",
                  }}
                >
                  {validation["password"]}
                </p>
              )}
            </div>
            <div className="inline-checkbox">
              <label htmlFor="rememberMe">
                <input
                  type="checkbox"
                  name=""
                  id="rememberMe"
                  style={{ display: "inline-block", width: "inherit" }}
                />
                Remember Me
              </label>
              <Link className="forgot-link">Forgot Password?</Link>
            </div>
            <button type="submit" className="btn btn-custom btn-logIn">
              Log In
            </button>
          </form>
          <span style={{ display: "block", marginTop: "15px" }}>
            Don't have an account?{" "}
            <Link to={`/signup`} className="forgot-link">
              Sign up
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Login;
