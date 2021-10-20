import { useState } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Dropdown({options, name, prompt}) {
  const [markup, setMarkup] = useState("");
  const [cost, setCost] = useState("");
  const [total, setTotal] = useState("");

  const handleChangeVendors = (e) => {
    setMarkup(e.target.value);
    console.log(markup);
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
    <div>
    <img className="logo" src="../bradenslogo.png" alt="bradenslogo" />
    </div>
    <div>
      <h4>Price Calculator</h4>
    </div>
      <form onChange={handleSubmit}>
        <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="simple-select-label">{prompt}</InputLabel>
        <Select
          labelId="select-label"
          id="select"
          options={options}
          value={markup}
          onChange={handleChangeVendors}
        >{options.map((option) => (
          <MenuItem key={name} value={option.markup}>
            {option.name}
          </MenuItem>
        ))}
        </Select>
      </FormControl>
    </Box>
    <div className="cost">
                <input
                  type="text"
                  placeholder="Cost"
                  value={cost}
                  onChange={handleChangeCost}
                />
              </div>
              <div className="btn">
                <button>Calculate</button>
              </div>
              <div className="retail">
                {total && <div>Retail: {total}</div>}
              </div>
    </form>
    <br/>
      <br/>
      <br/>
      <div>
        <h6>Test site for software in development.</h6>
      </div>
      <div>
        <h6>&copy; Bradens Furniture 2021. Created By Zach Puckett. </h6>
      </div>
    </>
    )
  }