import React, { useState } from 'react';
import { Container, Paper, Typography, Button, Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

const Term_service = () => {
  const [open, setOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');

  const handleAccept = () => {
    setOpen(false);
    // Handle accept logic here
    console.log("Accepted");
  };

  const handleDecline = () => {
    setOpen(false);
    // Handle decline logic here
    console.log("Declined");
  };

  const handleOpenDialog = (message) => {
    setDialogMessage(message);
    setOpen(true);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <main style={{ flexGrow: 1, padding: '16px 8px' }}>
        <Container maxWidth="xl">
          <Paper elevation={3} sx={{ padding: { xs: 2, md: 4 }, marginTop: { xs: 2, md: 4 } }}>
            <Typography variant="h4" gutterBottom>
              Terms of Service
            </Typography>
            <Box sx={{ marginBottom: 2 }}>
              <Typography variant="h6" gutterBottom>
                1. Introduction
              </Typography>
              <Typography variant="body1" paragraph>
                Welcome to our Terms of Service agreement. This document outlines the rules and regulations for using our website and services.
              </Typography>
            </Box>
            <Box sx={{ marginBottom: 2 }}>
              <Typography variant="h6" gutterBottom>
                2. User Responsibilities
              </Typography>
              <Typography variant="body1" paragraph>
                By accessing this website, you agree to comply with all applicable laws and regulations. You are responsible for your own actions while using our site.
              </Typography>
            </Box>
            <Box sx={{ marginBottom: 2 }}>
              <Typography variant="h6" gutterBottom>
                3. Privacy Policy
              </Typography>
              <Typography variant="body1" paragraph>
                We are committed to protecting your privacy. Please refer to our Privacy Policy for more information on how we collect and use your data.
              </Typography>
            </Box>
            <Box sx={{ marginBottom: 2 }}>
              <Typography variant="h6" gutterBottom>
                4. Modifications to the Terms
              </Typography>
              <Typography variant="body1" paragraph>
                We reserve the right to modify these terms at any time. Your continued use of the site constitutes your acceptance of any changes.
              </Typography>
            </Box>
            <Box sx={{ marginBottom: 2 }}>
              <Typography variant="h6" gutterBottom>
                5. Contact Information
              </Typography>
              <Typography variant="body1" paragraph>
                If you have any questions or concerns about these terms, please contact us at support@example.com.
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: { xs: 'column', md: 'row' }, gap: 2, marginTop: 4 }}>
              <Button variant="contained" color="primary" onClick={() => handleOpenDialog('Are you sure you want to accept the terms of service?')}>
                Accept
              </Button>
              <Button variant="contained" sx={{ backgroundColor: 'red', color: 'white', '&:hover': { backgroundColor: 'darkred' }}} onClick={() => handleOpenDialog('Are you sure you want to decline the terms of service?')}>
                Decline
              </Button>
            </Box>
          </Paper>
          <Dialog open={open} onClose={() => setOpen(false)}>
            <DialogTitle>Confirm Action</DialogTitle>
            <DialogContent>
              <DialogContentText>
                {dialogMessage}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleAccept} color="primary">
                Accept
              </Button>
              <Button onClick={handleDecline} sx={{ backgroundColor: 'red', color: 'white', '&:hover': { backgroundColor: 'darkred' } }}>
                Decline
              </Button>
            </DialogActions>
          </Dialog>
        </Container>
      </main>
    </div>
  );
}

export default Term_service;
