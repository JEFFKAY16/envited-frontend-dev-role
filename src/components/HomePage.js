import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import styles from '../styles/HomePageStyles';
import homeImage from '../images/homeIMG.png';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate()

  return (
    <Box sx={styles.container}>
      <Box sx={styles.imageContainer}>
        <Box 
          component="img"
          alt="Home"
          src={homeImage}
          sx={styles.image}
        />
      </Box>

      <Box sx={styles.textContainer}>
        <Typography sx={styles.headerText}>Imagine if <span>Snapchat</span><br /> had events.</Typography>
        <Typography sx={styles.descriptiveText}>Easily host and share events with your friends across any social media.</Typography>
        <Button sx={styles.button} onClick={() => navigate('/create')} variant='contained'>🎉 Create my event</Button>
      </Box>
    </Box>
  )
}

export default HomePage
