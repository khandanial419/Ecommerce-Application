import React, { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  Button,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const Term_service = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <main style={{ flexGrow: 1, padding: "16px 8px" }}>
        <Container maxWidth="xl">
          <Paper
            elevation={3}
            sx={{ padding: { xs: 2, md: 4 }, marginTop: { xs: 2, md: 4 } }}
          >
            <Typography
              variant="h4"
              gutterBottom
              sx={{ color: "#0494b8", fontWeight: "bold" }}
            >
              Terms of Service
            </Typography>
            <Box sx={{ marginBottom: 2 }}>
              <Typography variant="h5" gutterBottom>
                Introduction
              </Typography>
              <Typography variant="body1" paragraph>
                Welcome to our Terms of Service agreement. This document
                outlines the rules and regulations for using our website and
                services.
              </Typography>
            </Box>
            <Box sx={{ marginBottom: 2 }}>
              <Typography variant="h5" gutterBottom>
                User Responsibilities
              </Typography>
              <Typography variant="body1" paragraph>
                By accessing this website, you agree to comply with all
                applicable laws and regulations. You are responsible for your
                own actions while using our site.
              </Typography>
            </Box>
            <Box sx={{ marginBottom: 2 }}>
              <Typography variant="h5" gutterBottom>
                Privacy Policy
              </Typography>
              <Typography variant="body1" paragraph>
                We are committed to protecting your privacy. Please refer to our
                Privacy Policy for more information on how we collect and use
                your data.
              </Typography>
            </Box>
            <Box sx={{ marginBottom: 2 }}>
              <Typography variant="h5" gutterBottom>
                Modifications to the Terms
              </Typography>
              <Typography variant="body1" paragraph>
                We reserve the right to modify these terms at any time. Your
                continued use of the site constitutes your acceptance of any
                changes.
              </Typography>
            </Box>
            <Box sx={{ marginBottom: 2 }}>
              <Typography variant="h5" gutterBottom>
                Contact Information
              </Typography>
              <Typography variant="body1" paragraph>
                If you have any questions or concerns about these terms, please
                contact us at support@example.com.
              </Typography>
            </Box>
          </Paper>
        </Container>
      </main>
    </div>
  );
};

export default Term_service;
