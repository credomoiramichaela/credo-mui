import React from 'react';
import {Grid, Typography, Button,
        TextField, Box} from '@mui/material';

export default function TwoColumnLayoute() {
  return (
    <Box sx={{backgroundImage:
               'url(https://img.freepik.com/free-vector/hand-painted-watercolor-galaxy-background_23-2148973124.jpg?semt=ais_hybrid&w=740&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              minHeight: '100vh',
              p: 4,
              display: 'flex',
              alignItems: 'center',
            }}>
      <Grid container spacing={4} sx={{ p: 4 }}>

        {/* Left Column */}
        <Grid item xs={12} md={6}>
          <Box sx={{display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',  
                    justifyContent: 'center',  
                    height: '100%',
                    px: 2,
                  }}>
            <Box sx={{maxWidth: 660,
                      width: '100%',
                    }}>
              <Typography variant="h1" sx={{color: 'white',
                                            fontWeight: '800',
                                            mb: 4,
                                            fontFamily: 'Open Sans, sans-serif',
                                          }}>
                  Learn to code by watching others
              </Typography>

                  <Typography variant="body1" sx={{color: 'white',
                                                   fontSize: '1.4rem',
                                                   lineHeight: 1.3,
                                                   fontWeight: '500',
                                                   fontFamily: 'Arial, sans-serif',
                                                  }}>
                     See how experienced developers solve problems in 
                     real-time. Watching scripted tutorials is great, 
                     but understanding how developers think is invaluable.
                  </Typography>
             </Box>
          </Box>
        </Grid>


        {/* Right Column */}
        <Grid item xs={12} md={6}>
          <Box display="flex" flexDirection="column" gap={2} alignItems="center">
            <Button
              fullWidth
              sx={{
                maxWidth: 660,
                width: '100%',
                backgroundColor: 'purple',
                color: 'white',
                textAlign: 'center',
                py: 2,
                borderRadius: 1,
                fontWeight: 500,
                fontSize: '1rem',
                '&:hover': {
                  backgroundColor: '#6a0dad',
                },
              }}
            >
              Try it free 7 days then $20/mo. thereafter
            </Button>

            <Box
              component="form"
              display="flex"
              flexDirection="column"
              gap={2}
              sx={{
                backgroundColor: 'white',
                borderRadius: 2,
                p: 4,
                boxShadow: 4,
                maxWidth: 660,
                width: '100%',
              }}
            >
              <TextField label="First Name" variant="outlined" fullWidth />
              <TextField label="Last Name" variant="outlined" fullWidth />
              <TextField label="Email Address" variant="outlined" fullWidth />
              <TextField label="Password" type="password" variant="outlined" fullWidth />

              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: '#22c55e',
                  color: 'white',
                  fontWeight: 600,
                  py: 1.5,
                  fontSize: '1rem',
                  mt: 1,
                  '&:hover': {
                    backgroundColor: '#16a34a',
                  },
                }}
              >
                CLAIM YOUR FREE TRIAL
              </Button>

              <Typography
                variant="caption"
                color="text.secondary"
                align="center"
                sx={{ mt: 2 }}
              >
                By clicking the button, you are agreeing to our Terms and Services.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

