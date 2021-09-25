import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import vendors from './Vendors'

export default function Dropdown() {
  const defaultProps = {
    options: vendors,
    getOptionLabel: (option) => option.title,
  };

  const flatProps = {
    options: vendors.map((option) => option.title),
  };

  const [value, setValue] = useState(null);

  return (
    <Autocomplete
    {...flatProps}
    id="auto-complete"
    autoComplete
    includeInputInList
    renderInput={(params) => (
      <TextField {...params} label="autoComplete" variant="standard" />
    )}
  />
  )

}