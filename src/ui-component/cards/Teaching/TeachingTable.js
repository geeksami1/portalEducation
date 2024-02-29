import React from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, Button } from '@mui/material';

const TeachingTable = ({ data }) => {
  return (
    <Box>
      <TableContainer component={Paper}>
        <Table aria-label="teaching table">
          <TableHead sx={{display: 'none'}}>
            <TableRow>
              <TableCell style={{ color: 'black' }}>Name</TableCell>
              <TableCell style={{ color: 'black' }}>Class</TableCell>
              <TableCell style={{ color: 'black' }}>Subject</TableCell>
              <TableCell style={{ color: 'black' }}>Chapter</TableCell>
              <TableCell style={{ color: 'black' }}>Percentage</TableCell>
              <TableCell style={{ color: 'black' }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <React.Fragment key={index}>
                <TableRow sx={{borderRadius: "50%"}}>
                  <TableCell component="th" scope="row" style={{ color: 'black', padding: '10px 20px'}}>
                    <Box display="flex" alignItems="center">
                      <Avatar style={{ marginRight: '8px' }} src={row.avatar} />
                      {row.name}
                    </Box>
                  </TableCell>
                  <TableCell style={{ color: 'black' }}>{row.class}</TableCell>
                  <TableCell style={{ color: 'black' }}>{row.subject}</TableCell>
                  <TableCell style={{ color: 'black' }}>{row.chapter}</TableCell>
                  <TableCell style={{ color: 'black' }}>{row.percentage}</TableCell>
                  <TableCell style={{ color: 'black' }}>
                    {
                        row.action === "Quiz" ? 
                        <Button variant="outlined" color="primary" style={{marginLeft: '10px'}}>{row.action}</Button> :
                        <Button variant="outlined" color="success" style={{marginLeft: '10px'}}>{row.action}</Button>
                    }
                  </TableCell>
                </TableRow>
                {index !== data.length - 1 && (
                  <TableRow style={{ height: '10px' , border: 'none', backgroundColor: "#EEF2F6" }}>
                    <TableCell colSpan={7} />
                  </TableRow>
                )}
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TeachingTable;
