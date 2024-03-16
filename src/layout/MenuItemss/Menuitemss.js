import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SubjectIcon from '@mui/icons-material/Subject';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SettingsIcon from '@mui/icons-material/Settings';
import SchoolIcon from '@mui/icons-material/School';
import PeopleIcon from '@mui/icons-material/People';
import FeedbackIcon from '@mui/icons-material/Feedback';

const MenuItemss = ({ userrole }) => {
  const listItemTextProps = {
    primaryTypographyProps: {
      style: { color: 'white' }
    }
  };

  if (userrole === 'student') {
    return (
      <List component="nav">
        <ListItem button component={Link} to="/dashboard/default">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" {...listItemTextProps} />
        </ListItem>
        <ListItem button component={Link} to="/dashboard/subject">
          <ListItemIcon>
            <SubjectIcon />
          </ListItemIcon>
          <ListItemText primary="Subjects" {...listItemTextProps} />
        </ListItem>
        <ListItem button component={Link} to="/dashboard/result">
          <ListItemIcon>
            <AssessmentIcon />
          </ListItemIcon>
          <ListItemText primary="Results" {...listItemTextProps} />
        </ListItem>
        <ListItem button component={Link} to="/dashboard/setting">
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" {...listItemTextProps} />
        </ListItem>
      </List>
    );
  } else if (userrole === 'teacher') {
    return (
      <List component="nav">
        <ListItem button component={Link} to="/dashboard/teacher">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" {...listItemTextProps} />
        </ListItem>
        <ListItem button component={Link} to="/dashboard/course">
          <ListItemIcon>
            <SchoolIcon />
          </ListItemIcon>
          <ListItemText primary="Courses" {...listItemTextProps} />
        </ListItem>
        <ListItem button component={Link} to="/dashboard/student">
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Students" {...listItemTextProps} />
        </ListItem>
        <ListItem button component={Link} to="/dashboard/feedback">
          <ListItemIcon>
            <FeedbackIcon />
          </ListItemIcon>
          <ListItemText primary="Feedback" {...listItemTextProps} />
        </ListItem>
        <ListItem button component={Link} to="/dashboard/setting">
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" {...listItemTextProps} />
        </ListItem>
      </List>
    );
  } else {
    return null;
  }
};

export default MenuItemss;
