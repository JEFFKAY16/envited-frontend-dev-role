const styles = {
  container: {
    maxWidth: '100%',
    height: {
      xs: '100%',
      sm: '100vh'
    },
    background: 'linear-gradient(to right, #FBFAFF, #F6F2FF)',
    display: 'flex',
    flexDirection: 'column',
    padding: {
      xs: '60px 27px',
      sm: '60px 170px'
    },
    justifyContent: {
      xs: 'center',
      sm: 'start'
    },
    alignItems: {
      xs: 'center',
      sm: 'start'
    }
  },
  formAndImageContainer: {
    display: 'flex',
    flexDirection: {
      xs: 'column-reverse',
      sm: 'row'
    },
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  header: {
    fontWeight: 700,
    fontSize: {
      xs: '28px',
      sm: '48px',
    },
    lineHeight: {
      xs: '32px',
      sm: '55px',
    },
    color: '#240d57',
    marginTop: '12px'
  },
  formContainer: {
    width: {
      xs: '100%',
      sm: '30%'
    },
    padding: {
      xs: '20px',
      sm: '0px'
    },
    display: 'flex',
    flexDirection: 'column'
  },
  datePickers: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    margin: '10px 0'
  },
  button: {
    background: 'linear-gradient(to right, #8456EC, #E87BF8)',
    color: '#fff',
    padding: '16px',
    borderRadius: '10px',
    textTransform: 'capitalize',
    marginBottom: '20px'
  },
  imageContainer: {
    width: {
      xs: '165px',
      sm: '440px'
    },
    height: {
      xs: '292px',
      sm: '625px'
    }
  },
  image: {
    width: '100%',
    height: '100%'
  },
}

export default styles;
