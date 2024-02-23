import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableFooter from '@mui/material/TableFooter';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

function createRow(SNo, title, credit, grade, score, total) {
  return { SNo, title, credit, grade, score, total };
}

const rows = [
  createRow(1, 'Mathematics', 3, 'A+', 75, 100),
  createRow(2, 'English', 3, 'A+', 75, 100),
  createRow(3, 'Physics', 3, 'A+', 75, 100),
  createRow(4, 'French', 3, 'A+', 75, 100)
];

export default function SpanningTable() {
  return (
    <TableContainer component={Paper} sx={{overflowX: 'hidden '}}>
      <Table sx={{ minWidth: 700 }} aria-label="spanning table" style={{ overflowX: 'auto' }}>
        <TableHead>
          <TableRow>
            <TableCell colSpan={6} style={{ borderBottom: 'none' }}>
              <div style={{ display: 'flex', width: '90%' }}>
                <TextField label="Student ID" variant="outlined" style={{ flex: 1, marginRight: '10px' }} />
                <TextField label="Select Class" variant="outlined" style={{ flex: 1 }} />
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ color: '#4640e0', width: '100px' }}>S No</TableCell>
            <TableCell align="left" style={{ color: '#4640e0', width: '100px' }}>
              Subject Title
            </TableCell>
            <TableCell align="left" style={{ color: '#4640e0', width: '100px' }}>
              Credit
            </TableCell>
            <TableCell align="left" style={{ color: '#4640e0', width: '100px' }}>
              Grade
            </TableCell>
            <TableCell align="left" style={{ color: '#4640e0', width: '100px' }}>
              Score
            </TableCell>
            <TableCell align="left" style={{ color: '#4640e0', width: '100px' }}>
              Total
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.SNo}>
              <TableCell style={{ color: 'black', width: '100px' }}>{row.SNo}.</TableCell>
              <TableCell style={{ color: 'black', width: '100px' }}>{row.title}</TableCell>
              <TableCell style={{ color: 'black', width: '100px' }}>{row.credit}</TableCell>
              <TableCell style={{ color: 'black', width: '100px' }}>{row.grade}</TableCell>
              <TableCell align="left" style={{ color: 'black', width: '100px' }}>
                {row.score}
              </TableCell>
              <TableCell align="left" style={{ color: 'black', width: '100px' }}>
                {row.total}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={2} style={{color: 'black', fontSize: '15px' }} align="left">
              Total Subject: <b style={{color: "#4640e0"}}>4</b>
            </TableCell>
            <TableCell colSpan={2} style={{color: 'black', fontSize: '15px' }} align="left">
             Total Credit Taken: <b style={{color: "#4640e0"}}>12</b>
            </TableCell>
            <TableCell colSpan={2} style={{color: 'black', fontSize: '15px' }} align="left">
              Percentage: <b style={{color: "#4640e0"}}>75%</b>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
