const styles = {
  container: {
    maxWidth: '100%',
    height: '100vh',
    background: '#FBFAFF',
    display: 'flex',
    flexDirection: {
      xs: 'column-reverse',
      sm: 'row'
    },
    padding: {
      xs: '0px',
      sm: '184px 240px'
    },
    justifyContent: {
      xs: 'flex-end',
      sm: 'space-between'
    },
    alignItems: 'flex-start'
  },

  textContainer: {
    width: {
      xs: '100%',
      sm: '40%'
    },
    padding: {
      xs: '20px',
      sm: '0px'
    },
    display: 'flex',
    flexDirection: 'column'
  },

  eventName: {
    fontWeight: 700,
    fontSize: {
      xs: '28px',
      sm: '48px',
    },
    lineHeight: {
      xs: '32px',
      sm: '55px',
    },
    color: '#240d57'
  },
  hostName: {
    fontWeight: 700,
    fontSize: {
      xs: '14px',
      sm: '18px',
    },
    lineHeight: {
      xs: '16px',
      sm: '21px',
    },
    color: '#828282'
  },

  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: {
      xs: '16px',
      sm: '33px'
    },
    marginTop: {
      xs: '32px',
      sm: '65px'
    }
  },

  cards: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  card: {
    padding: '3px',
    display: 'flex',
    alignItems: 'center'
  },

  purpleIcons: {
    color: '#8456EC'
  },

  lightGreyIcons: {
    color: '#BDBDBD'
  },

  iconDatesAndLocation: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: '12px'
  },

  middleContentContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
  },

  datesAndLocationHeaders: {
    fontWeight: 700,
    fontSize: {
      xs: '16px',
      sm: '18px'
    },
    lineHeight: {
      xs: '18px',
      sm: '21px'
    },
    color: '#240D57'
  },

  datesAndLocationNonHEaders: {
    fontWeight: 700,
    fontSize: {
      xs: '14px',
      sm: '18px'
    },
    lineHeight: {
      xs: '16px',
      sm: '21px'
    },
    color: '#4F4F4F'
  },

  datesAndLocationLight: {
    fontWeight: 300,
    fontSize: {
      xs: '14px',
      sm: '18px'
    },
    lineHeight: {
      xs: '16px',
      sm: '21px'
    },
    color: '#4F4F4F'
  },

  imageContainer: {
    width: {
      xs: '375px',
      sm: '500px',
    },
    height: {
      xs: '375px',
      sm: '500px',
    }
  },
  image: {
    width: '100%',
    height: '100%'
  }
}

export default styles;
