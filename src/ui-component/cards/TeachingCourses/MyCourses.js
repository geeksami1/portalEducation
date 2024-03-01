import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';
import SeeMore from 'ui-component/button/SeeMore';

const MyCourses = ({ courses }) => {
  return (
    <Box sx={{ backgroundColor: '#FFF', borderRadius: '10px', px: 1, py: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2, px: 2 }}>
        <Typography variant="h4" sx={{ fontWeight: 600, fontSize: '20px', color: '#000' }}>
          My Courses
        </Typography>
        <SeeMore />
      </Box>
      {/* 2ND BOX  */}
      <Box>
        <TableContainer sx={{ maxHeight: '400px', overflowY: 'auto' }}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell align="left" sx={{ border: 'none' }}>
                  <Typography variant="body2" sx={{ color: '#000', fontSize: 11 }}>
                    Course Name
                  </Typography>
                </TableCell>
                <TableCell align="right" sx={{ border: 'none' }}>
                  <Typography variant="body2" sx={{ color: '#000', fontSize: 11 }}>
                    Start
                  </Typography>
                </TableCell>
                <TableCell align="right" sx={{ border: 'none' }}>
                  <Typography variant="body2" sx={{ color: '#000', fontSize: 11 }}>
                    Rate
                  </Typography>
                </TableCell>
                <TableCell align="right" sx={{ border: 'none' }}>
                  <Typography variant="body2" sx={{ color: '#000', fontSize: 11 }}>
                    Level
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {courses.map((course, index) => (
                <TableRow key={index}>
                  <TableCell align="center" sx={{ border: 'none' }}>
                    <Box display="flex" alignItems="center">
                      {/* BOX 1  */}
                      <Box sx={{ background: course.color, px: 1, py: 0.5, borderRadius: '10px' }}>
                        <img
                          src={course.img}
                          alt="course"
                          style={{ width: '30px', height: '30px', objectFit: 'contain', borderRadius: '10px' }}
                        />
                      </Box>
                      {/* BOX 2  */}
                      <Box ml={1}>
                        <Typography variant="body2" sx={{ textAlign: 'left', color: '#000', fontSize: 11, fontWeight: 600 }}>
                          {course.name}
                        </Typography>
                        <Typography variant="body2" sx={{ textAlign: 'left', color: 'rgba(0, 0, 0, 0.65)', fontSize: 11 }}>
                          {course.lessons} lessons
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell align="right" sx={{ border: 'none' }}>
                    <Typography variant="body2" sx={{ color: 'rgba(0, 0, 0, 0.75)', fontSize: 11 }}>
                      {course.startDate}
                    </Typography>
                  </TableCell>
                  <TableCell align="right" sx={{ border: 'none' }}>
                    <Typography variant="body2" sx={{ color: 'rgba(0, 0, 0, 0.75)', fontSize: 11 }}>
                      {course.rate}
                    </Typography>
                  </TableCell>
                  <TableCell align="right" sx={{ border: 'none' }}>
                    <Typography variant="body2" sx={{ color: 'rgba(0, 0, 0, 0.75)', fontSize: 11 }}>
                      {course.level}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default MyCourses;
