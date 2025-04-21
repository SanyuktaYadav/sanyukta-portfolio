import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Tooltip,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import { FaRegMoon, FaSun, FaHome } from "react-icons/fa";

const Navbar = ({ theme, handleChangeTheme }) => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <IconButton color="inherit" component={Link} to="/">
            <FaHome />
          </IconButton>
        </Box>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/about">
          About
        </Button>
        <Button color="inherit" component={Link} to="/projects">
          Projects
        </Button>
        <Button color="inherit" component={Link} to="/contact">
          Contact
        </Button>
        <Tooltip
          title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Theme`}
        >
          <Button
            onClick={() => {
              if (theme === "dark") {
                handleChangeTheme("light");
              } else {
                handleChangeTheme("dark");
              }
            }}
            sx={{ color: "white" }}
          >
            {theme === "dark" ? <FaSun /> : <FaRegMoon />}
          </Button>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
