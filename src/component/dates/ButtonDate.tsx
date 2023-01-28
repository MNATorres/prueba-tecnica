import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ButtonDate() {
  return (
    <Stack spacing={2} direction="row">
      <Button style={{padding: "0 40px"}} variant="contained">Ver</Button>
    </Stack>
  );
}