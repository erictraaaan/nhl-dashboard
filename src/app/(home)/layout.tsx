import { Box, Container, Typography } from '@mui/material';
import * as React from 'react';

export default function Home(props: { readonly children: React.ReactNode }) {
    return (
        <div>
            <header>
                <Container maxWidth="lg">
                    <Box
                        sx={{
                            my: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Typography variant="h1" component="h1" sx={{ mb: 2 }}>
                            NHL Dashboard
                        </Typography>
                    </Box>
                </Container>
            </header>
            {props.children}
            <footer>
                <Container maxWidth="lg">
                    <Box
                        sx={{
                            my: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Typography variant="h4" component="h4">
                            Made by Eric.
                        </Typography>
                    </Box>
                </Container>
            </footer>
        </div>
    );
}