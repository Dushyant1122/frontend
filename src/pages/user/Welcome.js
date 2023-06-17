import React from 'react';
import { Typography, Container, Paper } from '@mui/material';

export default function Welcome() {
  return (
    <>
    <Container maxWidth="sm" style={{justifyContent: 'center', alignItems: 'center', height: "100vh", display: "flex"}}>
      <Paper elevation={3} sx={{ padding: '100px' }}>
        <Typography variant="h4" align="center" sx={{ mb: 4 }}>
          Welcome, Akash!
        </Typography>
        <Typography variant="body1" align="center">
          Thank you for visiting our website.
        </Typography>
      </Paper>
    </Container>
    </>
  )
}
