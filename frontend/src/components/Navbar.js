import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link as LinkRoute} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import usersActions from '../redux/actions/usersActions';
import toast from 'react-hot-toast';
import { useState, useEffect } from 'react';
import "../styles/navbar.css";

const pages = [{ to: "/", name: "Home", id: 1 }, { to: "/Cities", name: "Cities", id: 2}];
const settings = [{to: "/signIn", name: "Log in", id:1}, {to: "/signUp", name: "Sign Up", id:2}];

const Navbar = () => {
  const [contador, setcontador] = useState(0);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const dispatch = useDispatch();
  const user = useSelector(store => store.usersReducer.user);
  const userMessage = useSelector(store => store.usersReducer.popup);

  useEffect(() => {
    if(userMessage?.success === true && contador === 0) {
      toast.success(userMessage.message)
    }
  },[user]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    setcontador(contador + 1);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
    setcontador(contador + 1);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    setcontador(contador + 1);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    setcontador(contador + 1);
  };

  const logOut = () => {
    dispatch(usersActions.signOutUser())
  };

  return (
    <AppBar
      position="absolute"
      sx={{ backgroundColor: "transparent", boxShadow: "none" }}
      className="navbar"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
            <LinkRoute to="/home">
            <img
              alt="logo"
              className="logo"
              src={process.env.PUBLIC_URL+'/assets/images/logo-oso-fondo.jpg'}
            />
            </LinkRoute>
          </Box>
          <Typography
            variant="h6"
            noWrap
            // component="a"
            // href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              fontSize: "3rem",
            }}
          >
            MyTinerary
          </Typography>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
              <LinkRoute to={page.to} key={page.id} onClick={handleCloseNavMenu}>
                <MenuItem >
                  <Typography textAlign="center" sx={{color: "black"}} className="a-respon">{page.name}</Typography>
                </MenuItem>
              </LinkRoute>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              mr: 1,
              justifyContent: "center",
            }}
          >
            <img
              alt="logo"
              className="logo"
              src={process.env.PUBLIC_URL+'/assets/images/logo-oso-fondo.jpg'}
            />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "end",
            }}
          >
            {pages.map((page) => (
            <LinkRoute to={page.to} key={page.id}
            onClick={handleCloseNavMenu}
            sx={{
              my: 2,
              color: "white",
              display: "block",
              fontSize: "1rem",
            }}>

              <Button
                
              >
                {page.name}
              </Button>
            </LinkRoute>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={(user !== null) ? user.photo : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/1280px-Flag_of_Canada_%28Pantone%29.svg.png"} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {(user !== null) ?
                <LinkRoute className="settings" to="/home" key="3" onClick={logOut}>
                  <Typography textAlign="center">Log out</Typography>
                </LinkRoute>
             :
              settings.map((setting) => (
                <LinkRoute className="settings" to={setting.to} key={setting.id} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" padding='5px' fontWeight="600">{setting.name}</Typography>
                </LinkRoute>
                ))
            }
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
