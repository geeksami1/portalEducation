import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
// import Box from '@mui/material/Box';


const ReactQuillComponent = ({Content}) => {
  const toolbarOptions = [
    [{ align: [] },
    { list: 'ordered' },
    { list: 'bullet' },
    { indent: '-1' },
    { indent: '+1' }],
    ['bold', 'italic', 'underline'],
    //Font
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ 'color': [] }, { 'background': [] }],
  ];

  return (
    <ReactQuill
      style={{ width: '100%', height: '50vh', color: 'black' }}
      theme="snow"
      value={Content}
      modules={{
        toolbar: {
          container: toolbarOptions, 
        },
      }}
    />
  );
};

export default ReactQuillComponent;
