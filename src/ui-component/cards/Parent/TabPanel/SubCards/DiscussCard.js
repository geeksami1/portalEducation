import { Avatar, Box, Button, FormHelperText, TextareaAutosize } from '@mui/material';
import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const DiscussCard = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', gap: 2 }}>
        <Avatar sx={{ width: 60, height: 60 }} src="/static/images/avatar/1.jpg" />
        <TextareaAutosize
          minRows={8}
          placeholder="Write your paragraph"
          style={{ width: '100%', border: '1px solid #E0E0E0', borderRadius: '10px', padding: '10px' }}
        />
      </Box>
      <Box sx={{ borderBottom: '1px solid #E0E0E0', width: '100%', mt: 2 }}></Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', gap: 2 }}>
      <FormControl size='small' sx={{ m: 1, minWidth: 120, mt:2, color: '#333' }}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em style={{ color: '#333'}}>Select Courses</em>
          </MenuItem>
          <MenuItem sx={{ color: '#333' }} value={10}>Ten</MenuItem>
          <MenuItem sx={{ color: '#333' }} value={20}>Twenty</MenuItem>
          <MenuItem sx={{ color: '#333' }} value={30}>Thirty</MenuItem>
        </Select>
   
      </FormControl>
        <Button variant="contained" sx={{ backgroundColor: '#4640e0', borderRadius: '10px', mt: 2, px: 5 }}>
          Post
        </Button>
      </Box>
    </>
  );
};

export default DiscussCard;
