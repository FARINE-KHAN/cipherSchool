import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Modal,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Register from "./Register";

const Home = () => {
  const [openModal, setOpenModal] =useState(false);

  const handleClickOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };
  return (
    <>
      <div style={{ background: "#F3912E", height: "100vh" }}>
        <div
          style={{
            textAlign: "center",
            width: "50vw",
            background: "white",
            position: "absolute",
            left: "24rem",
            top: "10rem",
            borderRadius: "2rem",
            padding: " 2rem 0 2rem 0",
          }}
        >
          <Typography variant="h4">
            <img
              src="https://d1fdloi71mui9q.cloudfront.net/bSgq3nQwqrPcQ8abi4uw_QO02HNPBOWgAtbu2"
              alt="logo..."
              style={{ height: "5vh", position: "absolute" }}
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CipherSchools
          </Typography>
          <h2 style={{}}>Hey, Welcome!</h2>
          <div>
            <Button
              variant="contained"
              onClick={handleClickOpen}
              style={{ background: "#F3912E" }}
            > Get started
             
              <Modal isOpen={openModal} onClose={handleClose}>
               <div>kya yaar</div> 
              </Modal>
            </Button>
          </div>
          <p style={{ fontFamily: "cursive", fontSize: "larger" }}>
            Already have account ?{" "}
            <span style={{ color: "#F3912E", fontWeight: "bold" }}>SignIn</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
