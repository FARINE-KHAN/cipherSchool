import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const Register = () => {
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
      });
    
      const toastOptions = {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      };
      const navigate = useNavigate();
      const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8800/register", values);
          navigate("/login");
        } catch (err) {
          toast.error(err.response.data, toastOptions);
        }
      };
    
      const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
      };
    
      return (
        <>
 
          <div className="form"  data-aos="zoom-out">
            <div className="form-main">
              <form onSubmit={handleSubmit} data-aos="slide-left">
                  <h1>REGISTER</h1>
                  <input
                    type="text"
                    placeholder="first  Name"
                    name="firstName"
                    onChange={handleChange}
                  />
    
                  <input
                    type="text"
                    placeholder="last name"
                    name="lastName"
                    onChange={handleChange}
                  />
    
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    onChange={handleChange}
                  />
    
                  <input
                    type="text"
                    placeholder="Phone Number"
                    name="phone"
                    onChange={handleChange}
                  />
    
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                  />
    
                 
                <div className="btn-primery">
                  <button type="submit">Create User </button>
                </div>
                <span>
                  Already have an account? <Link style={{textDecoration : "none"}} to="/login">Login</Link>
                </span>
              </form>
            </div>
          </div>
            <ToastContainer/>

        </>
      );
    }


export default Register