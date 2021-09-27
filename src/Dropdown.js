import React from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import vendors from './vendors.json'
export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box"
      options={vendors}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Vendor" />}
    />
 );
}