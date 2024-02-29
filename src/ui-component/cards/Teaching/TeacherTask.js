import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/system';

const Container = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '16px'
});

const InputField = styled(TextField)({
  marginRight: '8px',
  flex: 1
});

const WhiteBox = styled('div')({
  backgroundColor: 'white',
  padding: '16px',
  borderRadius: '8px'
});

const CheckboxContainer = styled('div')({
  display: 'flex',
  alignItems: 'center'
});

const CheckboxInput = styled('input')({
  marginRight: '8px',
  borderRadius: '50%', // Apply borderRadius of 50% to make checkbox appear as a circle
  width: '16px', // Set width and height for consistent appearance
  height: '16px',
  appearance: 'none', // Hide default appearance
  cursor: 'pointer', // Show pointer cursor on hover
  outline: 'none', // Remove focus outline
  border: '2px solid #555', // Add border for checkbox appearance
  '&:checked': {
    backgroundColor: '#FF8C00', // Change background color when checked
  },
  '&:checked::after': {
    content: '""',
    display: 'block',
    width: '10px',
    height: '10px',
    margin: '2px',
    borderRadius: '50%', // Apply borderRadius to pseudo-element for checked appearance
    backgroundColor: 'white', // Change background color when checked
  }
});

const CheckboxLabel = styled('label')({
  marginLeft: '4px'
});

const TeacherTask = () => {
  return (
    <div>
      <Container>
        <InputField
          placeholder="Add a new task here"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <IconButton>
                <SearchIcon />
              </IconButton>
            )
          }}
        />
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#FF8C00',
            '&:hover': {
              backgroundColor: '#FF7F00'
            }
          }}
        >
          <AddIcon />
        </Button>
      </Container>
      <WhiteBox>
       
        <CheckboxContainer sx={{py:1}}>
          <CheckboxInput type="checkbox" id="option1" />
          <CheckboxLabel  sx={{color: "black"}} htmlFor="option1">To plan and prepare appropriately  </CheckboxLabel>
        </CheckboxContainer>
        <CheckboxContainer sx={{py:1}}>
          <CheckboxInput type="checkbox" id="option1" />
          <CheckboxLabel  sx={{color: "black"}} htmlFor="option1">To plan and prepare appropriately  </CheckboxLabel>
        </CheckboxContainer>
        <CheckboxContainer sx={{py:1}}>
          <CheckboxInput type="checkbox" id="option1" />
          <CheckboxLabel  sx={{color: "black"}} htmlFor="option1">To plan and prepare appropriately  </CheckboxLabel>
        </CheckboxContainer>

        <CheckboxContainer sx={{py:1}}>
          <CheckboxInput type="checkbox" id="option1" />
          <CheckboxLabel  sx={{color: "black"}} htmlFor="option1">To plan and prepare appropriately  </CheckboxLabel>
        </CheckboxContainer>
        <CheckboxContainer sx={{py:1}}>
          <CheckboxInput type="checkbox" id="option1" />
          <CheckboxLabel  sx={{color: "black"}} htmlFor="option1">To plan and prepare appropriately  </CheckboxLabel>
        </CheckboxContainer>
      
     
      </WhiteBox>
    </div>
  );
};

export default TeacherTask;
