import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { gridSpacing } from 'store/constant';
import TeachingStudentsCard from 'ui-component/cards/TeachingStudents/TeachingStudentsCard';
import teacherstudent1 from '../../../../assets/images/teacherstudent1.png';
import teacherstudent2 from '../../../../assets/images/teacherstudent2.png';
import teacherstudent3 from '../../../../assets/images/teacherstudent3.png';
import teacherstudent4 from '../../../../assets/images/teacherstudent4.png';
const studentdata = [
  {
    id: 1,
    date: '22',
    month: 'Feb',
    firstName: 'John',
    lastName: 'Doe',
    grade: '10th',
    duration: '2h 30m',
    img: teacherstudent1,
    cardColor: '#DFF8FB'
  },
  {
    id: 2,
    date: '22',
    month: 'Mar',
    firstName: 'Jasmin',
    lastName: 'Jones',
    grade: '10th',
    duration: '2h 30m',
    img: teacherstudent2,
    cardColor: '#FFD9D9'
  },
  {
    id: 3,
    date: '15',
    month: 'Apr',
    firstName: 'Emily',
    lastName: 'Smith',
    grade: '9th',
    duration: '1h 45m',
    img: teacherstudent3,
    cardColor: '#FCE8B3'
  },
  {
    id: 4,
    date: '18',
    month: 'May',
    firstName: 'Michael',
    lastName: 'Brown',
    grade: '11th',
    duration: '2h 15m',
    img: teacherstudent4,
    cardColor: '#D6EAF8'
  },
  {
    id: 5,
    date: '10',
    month: 'Jun',
    firstName: 'Sophia',
    lastName: 'Johnson',
    grade: '12th',
    duration: '2h 30m',
    img: teacherstudent1,
    cardColor: '#F5CBA7'
  },
  {
    id: 6,
    date: '5',
    month: 'Jul',
    firstName: 'William',
    lastName: 'Davis',
    grade: '8th',
    duration: '1h 30m',
    img: teacherstudent2,
    cardColor: '#D5DBDB'
  }
];


const Student = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Grid container spacing={gridSpacing}>
      {/* Card Section - 6 columns on extra small screens and above */}
      <Grid item xs={12} sm={8}>
        {/* Your card section content */}
        <Grid container spacing={gridSpacing}>
          {
            studentdata.map((item, index) => (
              <Grid key={index} item xs={6}>
                <TeachingStudentsCard data={item} isLoading={isLoading} />
              </Grid>
            ))
          }
        
        </Grid>
      </Grid>

      {/* Leadership List - 6 columns on extra small screens and above */}
      <Grid item xs={12} sm={4}>
        {/* Your leadership list content */}
        {/* <TeachingStudentsCard isLoading={isLoading} /> */}
      </Grid>
    </Grid>
  );
};

export default Student;
