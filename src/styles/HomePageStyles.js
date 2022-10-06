const styles = {
  container: {
    maxWidth: '100%',
    height: '100vh',
    background: 'linear-gradient(to right, #F6F2FF, #FBFAFF)',
    display: 'flex',
    flexDirection: {
      xs: 'column-reverse',
      sm: 'row'
    },
    padding: {
      xs: '60px 27px',
      sm: '100px 170px'
    },
    justifyContent: {
      xs: 'center',
      sm: 'space-between'
    },
    alignItems: 'center'
  },

  imageContainer: {
    width: {
      xs: '165px',
      sm: '440px'
    },
    height: {
      xs: '292px',
      sm: '775px'
    }
  },

  image: {
    width: '100%',
    height: '100%'
  },

  textContainer: {
    width: {
      xs: '100%',
      sm: '50%'
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: {
      xs: 'center',
      sm: 'flex-end'
    },
    justifyContent: 'center',
    gap: '16px'
  },

  headerText: {
    width: {
      xs: '283px',
      sm: '574px'
    },
    height: {
      xs: '108px',
      sm: '192px'
    },
    fontWeight: 700,
    fontSize: {
      xs: '36px',
      sm: '64px'
    },
    lineHeight: {
      xs: '36px',
      sm: '64px'
    },
    textAlign: {
      xs: 'center',
      sm: 'right'
    },
    color: '#240d57'
  },

  gradientText: {
    background: 'linear-gradient(to right, #8456EC, #E87BF8)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  },

  descriptiveText: {
    width: {
      xs: '321px',
      sm: '521px'
    },
    height: {
      xs: '36px',
      sm: '56px'
    },
    fontWeight: {
      xs: 300,
    },
    fontSize: {
      xs: '16px',
      sm: '24px'
    },
    lineHeight: {
      xs: '18px',
      sm: '28px'
    },
    textAlign: {
      xs: 'center',
      sm: 'right'
    },
    color: '#4f4f4f'
  },
  button: {
    width: {
      xs: '187px',
      sm: '320px'
    },
    height: {
      xs: '50px',
      sm: '55px'
    },
    background: 'linear-gradient(to right, #8456EC, #E87BF8)',
    color: '#fff',
    padding: '16px',
    borderRadius: '10px',
    textTransform: 'capitalize',
    marginBottom: '20px'
  }
}

export default styles;
