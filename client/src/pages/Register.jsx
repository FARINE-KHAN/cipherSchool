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
padding:1rem;
  width: 50%;
  margin: 5% auto 5% auto;
  & > div {
    margin-top: 20px;
  }
`;
const Register = ({setOpen}) => {
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });
  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post("http://localhost:8800/register", inputs);
      toast.success(res.data, toastOptions);
      navigate("/myprofile");
    } catch (err) {
      toast.error(err.response.data, toastOptions);
    }
  };

  return (
    <Container style={{}}>
      <Typography variant="h4">Signup </Typography>
     
      <div style={{textAlign:"center"}}>
        
        <Typography variant="h4">
          <img
            src="https://d1fdloi71mui9q.cloudfront.net/bSgq3nQwqrPcQ8abi4uw_QO02HNPBOWgAtbu2"
            alt="logo..."
            style={{ height: "5vh",}}
          />
          &nbsp;&nbsp;&nbsp;CipherSchools
        </Typography>
        <h2 style={{lineHeight:"2px"}}>
        Create New Account
        </h2>
        <p>
        Please provide your valid informations to signup
        </p>
      </div>
     <div style={{display:"flex",flexDirection:"column",padding:"0 2rem 0 2rem "}}>
      <FormControl style={{background:"#F2F5FA",borderRadius:"1rem",paddingLeft:"1rem",marginBottom:"1rem",height:"2.5rem",outline:"none"}}>
        <Input onChange={handleChange} name="firstName" placeholder="First Name" />
      </FormControl>
      <FormControl style={{background:"#F2F5FA",borderRadius:"1rem",paddingLeft:"1rem",marginBottom:"1rem",height:"2.5rem"}}>
        <Input onChange={handleChange} name="lastName" placeholder="Last Name" />
      </FormControl>
      <FormControl style={{background:"#F2F5FA",borderRadius:"1rem",paddingLeft:"1rem",marginBottom:"1rem",height:"2.5rem"}}>
        <Input onChange={handleChange} type="email" name="email"placeholder="Email" />
      </FormControl>
      <FormControl style={{background:"#F2F5FA",borderRadius:"1rem",paddingLeft:"1rem",marginBottom:"1rem",height:"2.5rem"}}>
        <Input onChange={handleChange} name="phone" placeholder="phone number"/>
      </FormControl>
      <FormControl style={{background:"#F2F5FA",borderRadius:"1rem",paddingLeft:"1rem",marginBottom:"1rem",height:"2.5rem"}}>
        <Input onChange={handleChange} name="password" placeholder="password"/>
      </FormControl>
      <FormControl>
        <Button variant="contained" style={{background:"#F3912E",height:"2rem",borderRadius:"2rem"}} onClick={handleSubmit}>
          Create Account
        </Button>
      </FormControl></div>
     
      <ToastContainer />
    </Container>
  );
};

export default Register;
