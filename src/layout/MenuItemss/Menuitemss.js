import React, { useState } from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Collapse } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SubjectIcon from '@mui/icons-material/Subject';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SettingsIcon from '@mui/icons-material/Settings';
import SchoolIcon from '@mui/icons-material/School';
import PeopleIcon from '@mui/icons-material/People';
import FeedbackIcon from '@mui/icons-material/Feedback';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Boy, Female, Girl, Male } from '@mui/icons-material';

const MenuItemss = ({ userrole }) => {
  const listItemTextProps = {
    primaryTypographyProps: {
      style: { color: 'white' }
    }
  };

  const location = useLocation();

  const [openChildren, setOpenChildren] = useState(false);

  const toggleChildren = () => {
    setOpenChildren(!openChildren);
  };


  const isActive = (pathname) => {
    return location.pathname === pathname;
  };

  const listItemStyle = {
    background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.64) 0%, rgba(255, 255, 255, 0.283333) 50.04%, rgba(255, 255, 255, 0) 89.78%)'
  };

  return (
    <List component="nav">
      {userrole === 'student' ? (
        <>
          <ListItem button component={Link} to="/dashboard/default" style={isActive('/dashboard/default') ? listItemStyle : {}}>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" {...listItemTextProps} />
          </ListItem>
          <ListItem button component={Link} to="/dashboard/subject" style={isActive('/dashboard/subject') ? listItemStyle : {}}>
            <ListItemIcon>
              <SubjectIcon />
            </ListItemIcon>
            <ListItemText primary="Subjects" {...listItemTextProps} />
          </ListItem>
          <ListItem button component={Link} to="/dashboard/result" style={isActive('/dashboard/result') ? listItemStyle : {}}>
            <ListItemIcon>
              <AssessmentIcon />
            </ListItemIcon>
            <ListItemText primary="Results" {...listItemTextProps} />
          </ListItem>
          <ListItem button component={Link} to="/dashboard/setting" style={isActive('/dashboard/setting') ? listItemStyle : {}}>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" {...listItemTextProps} />
          </ListItem>
        </>
      ) : userrole === 'teacher' ? (
        <>
          <ListItem button component={Link} to="/dashboard/teacher" style={isActive('/dashboard/teacher') ? listItemStyle : {}}>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" {...listItemTextProps} />
          </ListItem>
          <ListItem button component={Link} to="/dashboard/course" style={isActive('/dashboard/course') ? listItemStyle : {}}>
            <ListItemIcon>
              <SchoolIcon />
            </ListItemIcon>
            <ListItemText primary="Courses" {...listItemTextProps} />
          </ListItem>
          <ListItem button component={Link} to="/dashboard/student" style={isActive('/dashboard/student') ? listItemStyle : {}}>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Students" {...listItemTextProps} />
          </ListItem>
          <ListItem button component={Link} to="/dashboard/feedback" style={isActive('/dashboard/feedback') ? listItemStyle : {}}>
            <ListItemIcon>
              <FeedbackIcon />
            </ListItemIcon>
            <ListItemText primary="Feedback" {...listItemTextProps} />
          </ListItem>
          <ListItem button component={Link} to="/dashboard/setting" style={isActive('/dashboard/setting') ? listItemStyle : {}}>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" {...listItemTextProps} />
          </ListItem>
        </>
      ) : userrole === 'parent' ? (
        <>
        <ListItem button component={Link} to="/dashboard/parent" style={isActive('/dashboard/parent') ? listItemStyle : {}}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" {...listItemTextProps} />
        </ListItem>
        {/* My Children */}
        <ListItem button onClick={toggleChildren}>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="My Childrens" {...listItemTextProps} />
          {openChildren ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openChildren} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {/* Subchildren */}
            <ListItem button component={Link} to="/dashboard/children/john_doe" style={{...isActive('/dashboard/children/john_doe') ? listItemStyle : {}, marginLeft:"10px"}}>
              <ListItemIcon>
                <Boy />
              </ListItemIcon>
              <ListItemText primary="John Doe" {...listItemTextProps} />
            </ListItem>
            <ListItem button component={Link} to="/dashboard/children/mary_jones" style={{...isActive('/dashboard/children/mary_jones') ? listItemStyle : {}, marginLeft: '10px'}}>
              <ListItemIcon>
                <Girl />
              </ListItemIcon>
              <ListItemText primary="Mary Jones" {...listItemTextProps} />
            </ListItem>
          </List>
        </Collapse>
        {/* Calendar */}
        <ListItem button component={Link} to="/dashboard/calendar" style={isActive('/dashboard/calendar') ? listItemStyle : {}}>
          <ListItemIcon>
            <CalendarMonthIcon />
          </ListItemIcon>
          <ListItemText primary="Calendar" {...listItemTextProps} />
        </ListItem>
        {/* Settings */}
        <ListItem button component={Link} to="/dashboard/setting" style={isActive('/dashboard/setting') ? listItemStyle : {}}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" {...listItemTextProps} />
        </ListItem>
      </>
      ): null}
    </List>
  );
};

export default MenuItemss;
