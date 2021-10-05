import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function BasicSelect({ options, prompt }) {
  const [markup, setMarkup] = useState(null);
  const [cost, setCost] = useState(0);
  const [total, setTotal] = useState(null);
 
  const handleChangeVendors = (e) => {
    setMarkup(e.target.value);
  };

  const handleChangeCost = (e) => {
    setCost(e.target.value);
  };

  const handleSubmit = (e) => {
    setTotal(
      Math.round((Number(markup) * Number(cost) + Number.EPSILON) * 100) / 100
    );

    e.preventDefault();
  };

  return (
    <>
      <Box sx={{ minWidth: 120 }}>
        <form onSubmit={handleSubmit}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">{prompt}</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              options={options}
              value={markup}
              label="Vendor"
              onChange={handleChangeVendors}
              sx={{ width: 300 }}
            >
              {options.map((option) => (
                <MenuItem value={option.markup}>{option.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            id="outlined-name"
            label="Cost"
            value={cost}
            onChange={handleChangeCost}
          />
          {/* <input type="text"
    onChange={handleChangeCost}
    value={cost} */}

          {total && <div>Retail:{total}</div>}
          <button type="submit">Calculate</button>
        </form>
      </Box>
    </>
  );
}
