import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";

const AboutUs = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#ffe6f0", // Light pink background
        minHeight: "5vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: 4,
      }}
    >
      <Card
        sx={{
          maxWidth: 600,
          width: "90%",
          backgroundColor: "#fff",
          boxShadow: 1,
          borderRadius: 1,
          p: 3,
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{ fontWeight: "bold", color: "#d81b60" }}
          >
            About Us
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "1rem", color: "#444" }}>
            Welcome to <strong>My Cart</strong> — a simple and efficient product
            management system where you can easily add, view, and delete your own
            products with images and descriptions.
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "1rem", color: "#444", mt: 2 }}
          >
            This project is designed to give users full control over their product
            listings, whether for showcasing or managing basic inventory. Built with{" "}
            <strong>React</strong>, <strong>Material-UI</strong>, and{" "}
            <strong>React Query</strong>, it provides a smooth, responsive experience
            with real-time data interaction.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default AboutUs;
