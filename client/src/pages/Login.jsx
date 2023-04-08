import {
  styled,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Container = styled(FormGroup)`
  // background:#2c3d4f;
  padding: 1rem;
  width: 50%;
  margin: 5% auto 5% auto;
  & > div {
    margin-top: 20px;
  }
`;
const Login = () => {
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const [inputs, setInputs] = useState({
    email: "",

    password: "",
  });
  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post("http://localhost:8800/login", inputs);
      toast.success(res.data, toastOptions);
      navigate("/");
    } catch (err) {
      toast.error(err.response.data, toastOptions);
    }
  };

  return (
    <Container style={{}}>
      <Typography variant="h4">Signin</Typography>
      <div style={{ textAlign: "center" }}>
        <Typography variant="h4">
          <img
            src="https://d1fdloi71mui9q.cloudfront.net/bSgq3nQwqrPcQ8abi4uw_QO02HNPBOWgAtbu2"
            alt="logo..."
            style={{ height: "5vh", position: "absolute" }}
          />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CipherSchools
        </Typography>
        <h2 style={{ lineHeight: "2px" }}>Hey, Welcome!</h2>
        <p>Please provide your email and password to signin</p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "0 2rem 0 2rem ",
        }}
      >
        <FormControl
          style={{
            background: "#F2F5FA",
            borderRadius: "1rem",
            paddingLeft: "1rem",
            marginBottom: "1rem",
            height: "2.5rem",
          }}
        >
          <Input
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="Email"
          />
        </FormControl>

        <FormControl
          style={{
            background: "#F2F5FA",
            borderRadius: "1rem",
            paddingLeft: "1rem",
            marginBottom: "1rem",
            height: "2.5rem",
          }}
        >
          <Input
            onChange={handleChange}
            name="password"
            placeholder="password"
            type="password"
          />
        </FormControl>
        <p
          style={{
            color: "#F3912E",
            fontSize: "large",
            marginLeft: "33rem",
            lineHeight: "2px",
          }}
        >
          Forget Password?
        </p>
        <FormControl>
          <Button
            variant="contained"
            style={{
              background: "#F3912E",
              height: "2.5rem",
              borderRadius: "2rem",
            }}
            onClick={handleSubmit}
          >
            Signin
          </Button>
        </FormControl>
      </div>

      <ToastContainer />
    </Container>
  );
};

export default Login;
