import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import PeopleIcon from '@mui/icons-material/People';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CopyrightIcon from '@mui/icons-material/Copyright';
import RateReviewIcon from '@mui/icons-material/RateReview';
import ForkRightIcon from '@mui/icons-material/ForkRight';
import NavBar from './NavBar';
import SearchIcon from "@mui/icons-material/Search";
import { InputBase } from '@mui/material';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

 function SideBar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}  style={{background:"white"}} >
        <Toolbar>
          <IconButton
            color="black"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            size=""
            edge="start"
            color="black"
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
              <SearchIcon  style={{color:"black"}}/>
              &nbsp;

              <InputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                style={{ marginRight: "" }}
              />
            </div>
            <div style={{marginRight:"3rem", color:"black"}} >
              <i className="fa-regular fa-bell fa-xl"></i>
            </div>
            <div style={{marginRight:"3rem",color:"black"}}>
              <i className="fa-solid fa-circle-user fa-xl"></i>
            </div>
          </div>
         
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader >
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Home','Courses','Trending','Following',"Dashboard",'Discord',"Creator access",'Feedback','Tour'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {text == "Home" ? <HomeIcon />: null}
                  {text == "Courses" ? <MenuBookIcon/> : null}
                  {text == "Trending" ? <ExploreIcon/> : null}
                  {text == "Following" ? <PeopleIcon/> : null}
                  {text == "Dashboard" ? <DashboardIcon/> : null}
                  {text == "Discord" ?<i className="fa-brands fa-discord"></i> : null}
                  {text == "Creator access" ? <CopyrightIcon/> : null}
                  {text == "Feedback" ? <RateReviewIcon/> : null}
                  {text == "Tour" ? <ForkRightIcon/> : null}



                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography paragraph>
        </Typography>
        <Typography paragraph>
        
        </Typography>
      </Box>
    </Box>
  );
}
export default SideBar