import { Button } from '@mui/material';
import React from 'react';

const SeeMore = () => {
  return (
    <Button
      variant="outlined"
      color="primary"
      size="small"
      sx={{
        backgroundColor: 'transparent',
        border: '1px solid #0000008C',
        color: '#0000008C',
        '&:hover': {
          backgroundColor: '#0000008C',
          color: '#fff',
        },
      }}
    >
      See All
    </Button>
  );
};

export default SeeMore;
