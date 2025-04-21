import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Tooltip,
  useMediaQuery,
  useTheme,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import { FaHome, FaRegMoon, FaSun, FaBars } from "react-icons/fa";

const Navbar = ({ theme, handleChangeTheme }) => {
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const primaryColor = muiTheme.palette.primary.main;

  const navItems = [
    { text: "Home", link: "/" },
    { text: "About", link: "/about" },
    { text: "Projects", link: "/projects" },
    { text: "Contact", link: "/contact" },
  ];

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const drawerContent = (
    <Box sx={{ width: 200 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {navItems.map((item) => (
          <ListItem button key={item.text} component={Link} to={item.link}>
            <ListItemText primary={item.text} sx={{ color: primaryColor }} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton color="inherit" component={Link} to="/">
            <FaHome />
          </IconButton>

          <Box sx={{ flexGrow: 1 }} />
          {isMobile ? (
            <>
              <Tooltip
                title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Theme`}
              >
                <IconButton
                  onClick={() =>
                    handleChangeTheme(theme === "dark" ? "light" : "dark")
                  }
                  sx={{ color: "white" }}
                >
                  {theme === "dark" ? <FaSun /> : <FaRegMoon />}
                </IconButton>
              </Tooltip>
              <IconButton
                color="inherit"
                edge="end"
                onClick={toggleDrawer(true)}
              >
                <FaBars />
              </IconButton>
            </>
          ) : (
            <>
              {navItems.map((item) => (
                <Button
                  key={item.text}
                  color="inherit"
                  component={Link}
                  to={item.link}
                >
                  {item.text}
                </Button>
              ))}
              <Tooltip
                title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Theme`}
              >
                <IconButton
                  onClick={() =>
                    handleChangeTheme(theme === "dark" ? "light" : "dark")
                  }
                  sx={{ color: "white" }}
                >
                  {theme === "dark" ? <FaSun /> : <FaRegMoon />}
                </IconButton>
              </Tooltip>
            </>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Navbar;
