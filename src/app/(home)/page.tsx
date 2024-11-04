import * as React from 'react';
import { Box,  Card,  Container, Typography } from "@mui/material";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'left',
        }}
      >
        <Card sx={{ p: 2, textAlign: 'center', width:'100%', minHeight: '25rem'  }}>
          <Typography variant="body1" component="p">
            Built with Next.js
            </Typography>
        </Card>
        
      </Box>
    </Container>
  );
}
