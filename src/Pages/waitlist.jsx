import React from 'react';
import { TextField, MenuItem, createTheme, ThemeProvider, Button } from '@mui/material';
import USFlag from '../assets/Icons/download.png'; 
const countries = [
  { value: 'US', label: 'United States', flag: USFlag },
  { value: 'CA', label: 'Canada', flag: USFlag },
  { value: 'UK', label: 'United Kingdom', flag: USFlag },
];

const theme = createTheme({
  palette: {
    text: {
      primary: '#ffffff',
    },
  },
});

const WaitList = () => {
  const customStyle = {
    background: 'url("../assets/Waitlist/waitlist.png")',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: '100vh',
    width: '100vw',
    color: 'white',
    paddingLeft: '20px',
    paddingRight: '20px',
  };

  const inputStyle = {
    marginBottom: '20px',
    width: '40%',
    marginLeft: '25px',
  };

  const buttonStyle = {
    marginTop: '20px',
    width: '20%',
    marginLeft: '25px',
    backgroundColor: 'white',
    color: 'black',
    borderRadius: '40px',
    padding: '10px',
    transition: 'box-shadow 0.3s ease-in-out',
    boxShadow: '1px 2px 5px white',
  };

  return (
    <ThemeProvider theme={theme}>
      <div style={customStyle}>
        <TextField
          label="Name"
          variant="standard"
          fullWidth
          InputLabelProps={{
            style: { color: 'white', opacity: 0.5 },
          }}
          InputProps={{
            style: { color: 'white' },
            disableUnderline: false,
          }}
          sx={{
            '& .MuiInput-underline:before': {
              borderBottom: '1px solid white',
              opacity: 0.5,
            },
            '& .MuiInput-underline:after': {
              borderBottom: '1px solid white',
              opacity: 0.5,
            },
          }}
          style={inputStyle}
        />
        <TextField
          label="Email"
          variant="standard"
          fullWidth
          InputLabelProps={{
            style: { color: 'white', opacity: 0.5 },
          }}
          InputProps={{
            style: { color: 'white' },
            disableUnderline: false,
          }}
          sx={{
            '& .MuiInput-underline:before': {
              borderBottom: '1px solid white',
            },
            '& .MuiInput-underline:after': {
              borderBottom: '1px solid white',
            },
          }}
          type="email"
          style={inputStyle}
        />
        <TextField
          select
          label="Country"
          variant="standard"
          fullWidth
          InputLabelProps={{
            style: { color: 'white' },
          }}
          InputProps={{
            style: { color: 'white' },
            disableUnderline: false,
          }}
          sx={{
            '& .MuiInput-underline:before': {
              borderBottom: '1px solid white',
            },
            '& .MuiInput-underline:after': {
              borderBottom: '1px solid white',
            },
          }}
          style={inputStyle}
        >
          {countries.map((country) => (
            <MenuItem
              key={country.value}
              value={country.value}
              style={{ color: 'white', backgroundColor: 'black', display: 'flex', alignItems: 'center' }}
            >
              <img
                src={country.flag}
                alt={`${country.label} flag`}
                style={{
                  width: '20px',
                  height: '20px',
                  marginRight: '8px',
                  borderRadius: '50%', 
                  overflow: 'hidden', 
                  border: '2px solid white', 
                }}
              />
              {country.label}
            </MenuItem>
          ))}
        </TextField>
        <Button
          variant="contained"
          style={{
            ...buttonStyle,
            '&:hover': {
              boxShadow: '0 0 20px black',
            },
          }}
        >
          Join Waitlist
        </Button>
      </div>
    </ThemeProvider>
  );
};

export default WaitList;
