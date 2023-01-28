import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


export const SelectMonth = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Mes</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Mes"
          onChange={handleChange}
        >
          <MenuItem value={10}>Enero</MenuItem>
          <MenuItem value={20}>Febrero</MenuItem>
          <MenuItem value={10}>Marzo</MenuItem>
          <MenuItem value={10}>Abril</MenuItem>
          <MenuItem value={10}>Mayo</MenuItem>
          <MenuItem value={10}>Junio</MenuItem>
          <MenuItem value={10}>Julio</MenuItem>
          <MenuItem value={10}>Agosto</MenuItem>
          <MenuItem value={10}>Septiembre</MenuItem>
          <MenuItem value={10}>Octubre</MenuItem>
          <MenuItem value={10}>Noviembre</MenuItem>
          <MenuItem value={10}>Diciembre</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}