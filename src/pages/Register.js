import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { registerInitiate } from "../redux/action";
import "./Register.css";

const Register = () => {
  const [state, setState] = useState({
    displayName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const { currentUser } = useSelector((state) => state.user);
  const [isRevealPwd, setIsRevealPwd] = useState(false);

  const history = useNavigate();

  useEffect(() => {
    if (currentUser) {
      history("/home");
    }
  }, [currentUser, history]);

  const dispatch = useDispatch();

  const { email, password, displayName, passwordConfirm } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      return;
    }
    dispatch(registerInitiate(email, password, displayName));
    setState({ email: "", displayName: "", password: "", passwordConfirm: "" });
  };
  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div className="register-page">
      <div id="register-form">
        <form className="form-signup" onSubmit={handleSubmit}>
          <h1
            className="h3 mb-5 font-weight-normal"
            style={{ textAlign: "center" }}
          >
            Sign Up
          </h1>
          <input
            type="text"
            id="displayName"
            className="form-control"
            placeholder="Full Name"
            name="displayName"
            onChange={handleChange}
            value={displayName}
            required
          />
          <input
            type="email"
            id="user-email"
            className="form-control"
            placeholder="Email Address"
            name="email"
            onChange={handleChange}
            value={email}
            required
          />
          <input
            type={isRevealPwd ? "text" : "password"}
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={password}
            required
          />
          <input
            type={isRevealPwd ? "text" : "password"}
            id="inputRePassword"
            className="form-control"
            placeholder="Repeat Password"
            name="passwordConfirm"
            onChange={handleChange}
            value={passwordConfirm}
            required
          />

          <button className="btn btn-primary btn-block" type="submit">
            <i className="fas fa-user-plus"></i> Sign Up
          </button>
          <Link to="/login" style={{ marginLeft: "42%", marginTop: "5%" }}>
            <i className="fas fa-angle-left"></i> Back
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
