import React from "react";
import { motion } from "framer-motion";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      alignItems="center"
      justifyContent="center"
      height="100vh"
      px={4}
      bgcolor="background.default"
    >
      {/* Animated Image */}
      <motion.img
        src="/images/sanyukta_dp.jpg" // Replace with your image path
        alt="Sanyukta"
        style={{
          width: 250,
          height: 250,
          // borderRadius: "50%",
          objectFit: "cover",
          margin: 25,
        }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
          ease: "easeOut",
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      />

      {/* Animated Typewriter Effect for 'Hi' */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.2,
          duration: 1.2,
          type: "spring",
          stiffness: 100,
        }}
      >
        <Typography variant="h3" gutterBottom>
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: "auto" }}
            transition={{
              duration: 2,
              ease: "easeInOut", // Correct easing function
            }}
            style={{
              display: "inline-block",
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
          >
            Hi, I'm Sanyukta Yadav{"  "}
          </motion.span>
          {/* Animated Up/Down Movement for the 👋 emoji */}
          <motion.span
            animate={{
              y: [0, -10, 0, 10, 0], // Moves up and down
            }}
            transition={{
              repeat: Infinity, // Loop forever
              duration: 2, // Complete cycle time
              ease: "easeInOut", // Smooth easing
            }}
          >
            👋
          </motion.span>
        </Typography>

        <Typography variant="h6" color="text.secondary" gutterBottom>
          Fullstack Developer | React & Node | Passionate Coder 🚀
        </Typography>

        {/* Animated Button */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              navigate("/projects");
            }}
          >
            View My Work
          </Button>
        </motion.div>
      </motion.div>
    </Box>
  );
};

export default Home;
