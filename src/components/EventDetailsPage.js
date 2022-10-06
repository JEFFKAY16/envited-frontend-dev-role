import React from 'react'
import { Box, Card, Typography } from '@mui/material'
import styles from '../styles/EventDetailsPageStyles'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { getAllDetails } from '../redux/eventDetailsSlice';
import { useSelector } from 'react-redux';

const EventDetailsPage = () => {
  const eventDetails = useSelector(getAllDetails);

  return (
    <>
      {eventDetails && eventDetails.map(details => (
        <Box key={details.eventName} sx={styles.container}>
          <Box sx={styles.textContainer}>
            <Typography sx={styles.eventName}>{details.eventName}</Typography>
            <Typography sx={styles.hostName}>Hosted by {details.hostName}</Typography>
            <Box sx={styles.cardContainer}>
              <Box sx={styles.cards}>
                <Box sx={styles.iconDatesAndLocation}>
                  <Card sx={styles.card}>
                    <CalendarMonthIcon sx={styles.purpleIcons} />
                  </Card>
                  <Box sx={styles.middleContentContainer}>
                    <Typography sx={styles.datesAndLocationHeaders}>{details.startDate.toLocaleDateString()}</Typography>
                    <Typography sx={styles.datesAndLocationNonHEaders}>to {details.endDate.toLocaleDateString()}</Typography>
                  </Box>
                </Box>
                <KeyboardArrowRightOutlinedIcon sx={styles.lightGreyIcons} />
              </Box>
              <Box sx={styles.cards}>
                <Box sx={styles.iconDatesAndLocation}>
                  <Card sx={styles.card}>
                    <FmdGoodOutlinedIcon sx={styles.purpleIcons} />
                  </Card>
                  <Box sx={styles.middleContentContainer}>
                    <Typography sx={styles.datesAndLocationHeaders}>{details.streetName}</Typography>
                    <Typography sx={styles.datesAndLocationLight}>{details.cityName}</Typography>
                  </Box>
                </Box>
                <KeyboardArrowRightOutlinedIcon sx={styles.lightGreyIcons} />
              </Box>
            </Box>
          </Box>

          <Box sx={styles.imageContainer}>
            <Box 
              component="img"
              src={URL.createObjectURL(details.eventImage)}
              alt="Event Image"
              sx={styles.image}
            />
          </Box>
        </Box>
      ))}
    </>
  )
}

export default EventDetailsPage
