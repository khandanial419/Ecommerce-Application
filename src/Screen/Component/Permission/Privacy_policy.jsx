import React from 'react'
import { Container, Paper, Typography, Box } from '@mui/material';

const Privacy_policy = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <main className="flex-grow p-4 md:p-10">
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <main style={{ flexGrow: 1, padding: '16px' }}>
        <Container maxWidth="xl">
          <Paper elevation={3} sx={{ padding: { xs: 2, md: 4 }, marginTop: { xs: 2, md: 4 } }}>
            <Typography variant="h4" gutterBottom>
              Privacy Policy
            </Typography>
            <Box sx={{ marginBottom: 2 }}>
              <Typography variant="h6" gutterBottom>
                1. Introduction
              </Typography>
              <Typography variant="body1" paragraph>
                Welcome to our Privacy Policy. Your privacy is critically important to us. We respect your privacy and are committed to protecting personally identifiable information you may provide us through the website.
              </Typography>
            </Box>
            <Box sx={{ marginBottom: 2 }}>
              <Typography variant="h6" gutterBottom>
                2. Information We Collect
              </Typography>
              <Typography variant="body1" paragraph>
                We only collect information about you if we have a reason to do so — for example, to provide our services, to communicate with you, or to make our services better.
              </Typography>
            </Box>
            <Box sx={{ marginBottom: 2 }}>
              <Typography variant="h6" gutterBottom>
                3. How We Use Information
              </Typography>
              <Typography variant="body1" paragraph>
                We use the information we collect in various ways, including to provide and maintain our services, to notify you about changes to our services, to provide customer support, and to gather analysis or valuable information so that we can improve our services.
              </Typography>
            </Box>
            <Box sx={{ marginBottom: 2 }}>
              <Typography variant="h6" gutterBottom>
                4. Sharing of Information
              </Typography>
              <Typography variant="body1" paragraph>
                We do not share your personal information with anyone except to comply with the law, develop our products, or protect our rights.
              </Typography>
            </Box>
            <Box sx={{ marginBottom: 2 }}>
              <Typography variant="h6" gutterBottom>
                5. Security of Information
              </Typography>
              <Typography variant="body1" paragraph>
                We are committed to protecting your personal information and implementing appropriate technical and organizational measures to secure it.
              </Typography>
            </Box>
            <Box sx={{ marginBottom: 2 }}>
              <Typography variant="h6" gutterBottom>
                6. Changes to This Privacy Policy
              </Typography>
              <Typography variant="body1" paragraph>
                Although most changes are likely to be minor, we may change our Privacy Policy from time to time. We encourage visitors to frequently check this page for any changes.
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" gutterBottom>
                7. Contact Information
              </Typography>
              <Typography variant="body1" paragraph>
                If you have any questions about this Privacy Policy, please contact us at support@example.com.
              </Typography>
            </Box>
          </Paper>
        </Container>
      </main>
    </div>
        </main>
        </div>
  )
}

export default Privacy_policy
