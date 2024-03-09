import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const TableTopics = ({ data }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{ color: 'rgba(0, 0, 0, 0.55)', fontWeight: 100 }}>Topic Name</TableCell>
            <TableCell style={{ color: 'rgba(0, 0, 0, 0.55)', fontWeight: 100 }}>Difficulty</TableCell>
            <TableCell style={{ color: 'rgba(0, 0, 0, 0.55)', fontWeight: 100 }}>Lessons</TableCell>
            <TableCell style={{ color: 'rgba(0, 0, 0, 0.55)', fontWeight: 100 }}>Practice</TableCell>
            <TableCell style={{ color: 'rgba(0, 0, 0, 0.55)', fontWeight: 100 }}>Quizzes</TableCell>
            <TableCell style={{ color: 'rgba(0, 0, 0, 0.55)', fontWeight: 100 }}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index} style={{ marginBottom: '10px' }}>
              <TableCell>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={row.image} alt="Topic" style={{ width: 20, marginRight: 10 }} />
                  {row.topic}
                </div>
              </TableCell>
              <TableCell>{row.difficulty}</TableCell>
              <TableCell>{row.lessons}</TableCell>
              <TableCell>{row.practice}</TableCell>
              <TableCell>{row.quiz}</TableCell>
              <TableCell>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableTopics;
