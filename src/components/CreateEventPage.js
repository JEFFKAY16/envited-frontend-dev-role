import React, { useState } from 'react';
import { Box, Button, Typography, TextField } from '@mui/material';
import styles from '../styles/CreateEventPageStyles';
import image from '../images/homeIMG.png';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import { addEventDetails } from '../redux/eventDetailsSlice';
import { useDispatch } from 'react-redux';

const CreateEventPage = () => {
  const [eventName, setEventName] = useState('');
  const [hostName, setHostName] = useState('');
  const [startDate, setStartDate] = useState(dayjs('2022-10-04T21:11:54'));
  const [endDate, setEndDate] = useState(dayjs('2022-11-04T21:11:54'));
  const [streetName, setStreetName] = useState('');
  const [cityName, setCityName] = useState('');
  const [eventImage, setEventImage] = useState(null)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleStartDate = (newValue) => {
    setStartDate(newValue);
  };

  const handleEndDate = (newValue) => {
    setEndDate(newValue);
  };
  
  const submitFormData = (e) => {
    e.preventDefault()

    dispatch(addEventDetails({
      eventName,
      hostName,
      startDate: startDate.$d,
      endDate: endDate.$d,
      streetName,
      cityName,
      eventImage
    }))
    navigate('/event')
  }

  return (
    <Box sx={styles.container}>
      <Box>
        <Button variant="outlined" onClick={() => navigate('/')}>Cancel Event</Button>
      </Box>

      <Box>
        <Typography sx={styles.header}>Create your event</Typography>
      </Box>

      <Box sx={styles.formAndImageContainer}>
        <Box component="form" onSubmit={submitFormData}>
          <TextField
            margin="normal"
            fullWidth
            id="eventName"
            label="Name of event"
            name="eventName"
            autoComplete="eventName"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
          />
          <TextField
            margin="normal"
            fullWidth
            id="hostName"
            label="Your name"
            name="hostName"
            autoComplete="hostName"
            value={hostName}
            onChange={(e) => setHostName(e.target.value)}
          />

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box style={styles.datePickers}>
              <DateTimePicker
                label="When does it start?"
                value={startDate}
                onChange={handleStartDate}
                renderInput={(params) => <TextField {...params} />}
              />
              <DateTimePicker
                label="When does it end?"
                value={endDate}
                onChange={handleEndDate}
                renderInput={(params) => <TextField {...params} />}
              />
            </Box>
          </LocalizationProvider>

          <TextField
            margin="normal"
            fullWidth
            id="location"
            label="Where will it be? (Enter street name here)"
            name="location"
            autoComplete="location"
            value={streetName}
            onChange={(e) => setStreetName(e.target.value)}
          />
          <TextField
            margin="normal"
            fullWidth
            id="location2"
            label="Where will it be? (Enter City/State, Postal code)"
            name="location2"
            autoComplete="location2"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
          />

          <Button variant="contained" component="label" sx={styles.button}>
            Upload Event Photo 📷
            <input hidden accept="image/*" multiple type="file" 
              onChange={(event) => {
                console.log(event.target.files[0]);
                setEventImage(event.target.files[0]);
              }}
            />
          </Button>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={styles.button}
          >
            Next
          </Button>
        </Box>

        <Box sx={styles.imageContainer}>
          <Box
            component="img"
            src={image}
            alt="Create Event Image"
            sx={styles.image}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default CreateEventPage