import React from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, Typography, Box, TableContainer } from '@mui/material';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import img1 from '../../assets/images/tableui1.png';

const TopicsTableUi = ({ data }) => {
  return (
    <TableContainer
      sx={{
        borderRadius: 5,
        border: 1
      }}
    >
      <Table
        size="small"
        sx={{
          borderCollapse: 'collapse',
          borderStyle: 'hidden',
          '& td': {
            border: 0
          }
        }}
      >
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
          {data?.map((row, index) => (
            <>
             
                <TableRow key={index} sx={{ my: 3, py: 3, cursor: 'pointer' }} style={{ backgroundColor: row.backgroundColor }}>
                  <Link to={`/dashboard/lesson`} style={{ textDecoration: 'none' }}>
                  <TableCell sx={{ my: 2.5, py: 2.5 }} style={{ color: '#000' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <img src={row.icon} alt={`tableui${index}`} style={{ width: '30px', height: '30px', objectFit: 'contain' }} />
                      <Typography style={{ color: '#000', fontWeight: 'bold' }}>{row.topic}</Typography>
                    </Box>
                  </TableCell>

                  </Link>
                  <TableCell style={{ color: '#000', fontWeight: 'bold' }}>{row.difficulty}</TableCell>
                  <TableCell style={{ color: '#000', fontWeight: 'bold' }}>{row.lessons}</TableCell>
                  <TableCell style={{ color: '#000', fontWeight: 'bold' }}>{row.practice}</TableCell>
                  <TableCell style={{ color: '#000', fontWeight: 'bold' }}>{row.quiz}</TableCell>
                  <TableCell style={{ color: '#000', fontWeight: 'bold' }}>{row.status}</TableCell>
                </TableRow>
             
            </>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TopicsTableUi;
