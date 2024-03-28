import MainLayout from 'layout/MainLayout';
import Quiz from 'views/dashboard/Default/Quiz';
import Settings from 'views/dashboard/Default/Settings';
import TeacherDashboard from 'views/dashboard/Teacher';
import Courses from 'views/dashboard/Teacher/Courses';
import Feedback from 'views/dashboard/Teacher/Feedback';
import Student from 'views/dashboard/Teacher/Student';


const TeacherRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <TeacherDashboard />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'teacher',
          element: <TeacherDashboard />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'teacher',
          element: <TeacherDashboard />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'course',
          element: <Courses />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'student',
          element: <Student />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'quiz',
          element: <Quiz />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'feedback',
          element: <Feedback />
        }
      ]
    },
    //Setting
    {
      path: 'dashboard',
      children: [
        {
          path: 'setting',
          element: <Settings />
        }
      ]
    }


  ]
};

export default TeacherRoutes;
