import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { darkTheme, lightTheme } from "./utils/Theme";

function AppRoutes() {
  const [theme, setTheme] = useState();

  const storedTheme = localStorage.getItem("theme");
  useEffect(() => {
    if (!theme && storedTheme) {
      setTheme(storedTheme);
    }
  }, [theme, storedTheme]);

  useEffect(() => {
    if (theme) {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const handleChangeTheme = (selectedTheme) => {
    setTheme(selectedTheme);
  };

  return (
    <>
      <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
        <CssBaseline /> {/* Ensures dark background & resets browser styles */}
        <Navbar theme={theme} handleChangeTheme={handleChangeTheme} />
        <Box sx={{ paddingTop: "64px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default AppRoutes;
