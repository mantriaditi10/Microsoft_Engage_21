import React from 'react';
import { TextField, Grid } from '@mui/material';

// To reduce the horizontal Line length in Auth Component for similar TextFields
const Input = ({ name, handleChange, label, half, autoFocus, type }) => (
  <Grid item xs={12} sm={half ? 6 : 12}>
    <TextField
      sx={{ m: 1 }}
      name={name}
      onChange={handleChange}
      variant="outlined"
      required
      fullWidth
      label={label}
      autoFocus={autoFocus}
      type={type}
    />
  </Grid>
);

export default Input;