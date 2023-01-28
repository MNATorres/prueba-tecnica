import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectAge() {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Año</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>2021</MenuItem>
          <MenuItem value={20}>2022</MenuItem>
          <MenuItem value={30}>2023</MenuItem>
          <MenuItem value={30}>2024</MenuItem>
          <MenuItem value={30}>2025</MenuItem>
          <MenuItem value={30}>2026</MenuItem>
          <MenuItem value={30}>2026</MenuItem>
          <MenuItem value={30}>2027</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}