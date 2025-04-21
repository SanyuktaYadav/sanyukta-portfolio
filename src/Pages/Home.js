import React from "react";
import { motion } from "framer-motion";
import { Box, Typography, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        px: 4,
        py: 8,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        {/* Image Section */}
        <Grid item xs={12} md={5} textAlign="center">
          <motion.img
            src="/images/sanyukta_dp.jpg"
            alt="Sanyukta"
            style={{
              width: 250,
              height: 250,
              objectFit: "cover",
              borderRadius: "50%",
              margin: 25,
            }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          />
        </Grid>

        {/* Text Section */}
        <Grid item xs={12} md={7}>
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
            <Typography
              variant={"h3"}
              gutterBottom
              sx={{
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem", lg: "3rem" },
                gap: 1,
                textAlign: { xs: "center", md: "left" },
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                style={{
                  display: "inline-block",
                  whiteSpace: "nowrap",
                }}
              >
                Hi, I'm Sanyukta Yadav
              </motion.span>

              <motion.span
                animate={{ y: [0, -10, 0, 10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                }}
                style={{ display: "inline-block" }}
              >
                👋
              </motion.span>
            </Typography>

            <Typography variant="h6" color="text.secondary" gutterBottom>
              Fullstack Developer | React & Node | Passionate Coder 🚀
            </Typography>

            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Button
                variant="contained"
                color="primary"
                onClick={() => navigate("/projects")}
              >
                View My Work
              </Button>
            </motion.div>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
