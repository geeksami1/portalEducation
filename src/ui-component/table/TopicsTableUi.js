import React from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, Typography, Box, TableContainer } from '@mui/material';
import { Link } from 'react-router-dom';
import { capitalizeFirstLetter } from 'views/utilities/Capitilize';
import premium01 from '../../assets/images/sel.jpeg';
const TopicsTableUi = ({ data }) => {
  return (
    <TableContainer
      sx={{
        borderRadius: 5,
        border: 1,
        overflowX: 'hidden',
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
            <TableCell style={{ color: 'rgba(0, 0, 0, 0.55)', fontWeight: 400 }}>Topic Name</TableCell>
            <TableCell style={{ color: 'rgba(0, 0, 0, 0.55)', fontWeight: 400 }}>Difficulty</TableCell>
            <TableCell style={{ color: 'rgba(0, 0, 0, 0.55)', fontWeight: 400 }}>Lessons</TableCell>
            <TableCell style={{ color: 'rgba(0, 0, 0, 0.55)', fontWeight: 400 }}>Practice</TableCell>
            <TableCell style={{ color: 'rgba(0, 0, 0, 0.55)', fontWeight: 400 }}>Quizzes</TableCell>
            <TableCell style={{ color: 'rgba(0, 0, 0, 0.55)', fontWeight: 400 }}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row, index) => (
            <TableRow
              key={index}
              sx={{ my: 3, py: 3, cursor: 'pointer', transition: 'transform 0.2s ease-in-out', '&:hover': { transform: 'scale(1.01)' } }}
              style={{ backgroundColor: '#fff' }}
            >
              <Link to={`/dashboard/lesson/${row._id}`} style={{ textDecoration: 'none' }}>
                <TableCell sx={{ my: 2.5, py: 2.5 }} style={{ color: '#000' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <img src={premium01} alt={`tableui${index}`} style={{ width: '30px', height: '30px', objectFit: 'contain' }} />
                    <Typography style={{ color: '#000', fontWeight: '600', fontSize: 12 }}>{capitalizeFirstLetter(row.topicname)}</Typography>
                  </Box>
                </TableCell>
              </Link>
              <TableCell style={{ color: '#000', fontWeight: '500', fontSize: 12 }}>{row.difficulty}</TableCell>
              <TableCell style={{ color: '#000', fontWeight: '500', fontSize: 12 }}>{row.lessonHours}</TableCell>
              <TableCell style={{ color: '#000', fontWeight: '500', fontSize: 12 }}>{row.practiceHours}</TableCell>
              <TableCell style={{ color: '#000', fontWeight: '500', fontSize: 12 }}>{row.quizzes}</TableCell>
              <TableCell style={{ color: '#000', fontWeight: '500', fontSize: 12 }}>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TopicsTableUi;
