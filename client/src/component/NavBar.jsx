import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import styled from "@emotion/styled";
import { AppBar } from "@mui/material";

// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   '&:hover': {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginLeft: 0,
//   width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(1),
//     width: 'auto',
//   },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       width: '12ch',
//       '&:focus': {
//         width: '20ch',
//       },
//     },
//   },
// }));

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "white", color: "black" }}>
        <Toolbar>
          <IconButton
            size=""
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <img
              src="https://d1fdloi71mui9q.cloudfront.net/bSgq3nQwqrPcQ8abi4uw_QO02HNPBOWgAtbu2"
              alt="logo..."
              style={{ height: "4vh" }}
            />{" "}
            CipherSchools
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <i
              className="fa-regular fa-compass"
              style={{ fontSize: "medium" }}
            ></i>{" "}
            <select style={{ border: "none" }} placeholder="Browse">
              <option>Browse</option>
            </select>
          </Typography>
          <div style={{display:"flex",alignItems:"center"}}>
            <div style={{display:"flex",alignItems:"center",marginRight:"4rem",background:"#F2F5FA",borderRadius:"2rem",width:"25vw"}}>
              <SearchIcon />
              &nbsp;

              <InputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                style={{ marginRight: "" }}
              />
            </div>
            <div style={{marginRight:"3rem"}} >
              <i className="fa-regular fa-bell fa-xl"></i>
            </div>
            <div style={{marginRight:"3rem"}}>
              <i className="fa-solid fa-circle-user fa-xl"></i>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
