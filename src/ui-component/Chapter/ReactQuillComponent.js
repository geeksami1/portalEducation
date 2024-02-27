import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
// import Box from '@mui/material/Box';

const Content = `
Cell biology is the branch of biology that explores the structure, function, and behavior of cells, the basic units of life. It encompasses a wide range of topics, from the molecular mechanisms that govern cellular processes to the organization and interactions of cells within tissues and organisms. Cell biologists investigate various aspects of cell life, including cell division, metabolism, communication, and differentiation. Understanding cell biology is crucial for advancing our knowledge of biological systems and their role in health, disease, and the environment. It provides insights into fundamental biological processes and serves as the foundation for fields such as biotechnology, medicine, and genetics.
`;
const ReactQuillComponent = () => {
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
