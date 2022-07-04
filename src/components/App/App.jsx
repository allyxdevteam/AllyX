import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import swal from 'sweetalert2';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import InfoPage from '../InfoPage/InfoPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import Profile from '../Profile/Profile';
import RegisterPage from '../RegisterPage/RegisterPage';
import UpdateProfile from '../UpdateProfile/UpdateProfile';
import GeneralComment from '../GeneralComment/GeneralComment';
import AllyRequestedCalls from '../AllyRequestedCalls/AllyRequestedCalls';
import AdminDashboard from '../AdminDashboard/AdminDashboard';
import AllyStartCall from '../AllyStartCall/AllyStartCall';
import AllyCallInProgress from '../AllyCallInProgress/AllyCallInProgress';

import BottomNav from '../Nav/Components/BottomNav';

import AllyReviewCall from '../AllyReviewCall/AllyReviewCall';
import MemberReviewCall from '../MemberReviewCall/MemberReviewCall';
import AllyReportMisuse from '../AllyReportMisuse/AllyReportMisuse';
import MemberCallRequested from '../MemberCallRequested/MemberCallRequested';
import MemberReportMisuse from '../MemberReportMisuse/MemberReportMisuse';

import './App.css';
import AllyApplication from '../AllyApplication/AllyApplication';
import Theme from '../_Theme/_Theme';

import { createTheme, ThemeProvider, styled } from '@mui/material/styles';



function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <ThemeProvider theme={Theme}>
    <Router>
      <div>
        <div sx={{zIndex:0}}>
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          {/* Visiting localhost:3000/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}

          <ProtectedRoute
            exact
            path="/profile"
          >
            <Profile />
          </ProtectedRoute>

          <ProtectedRoute
            exact
            path="/comment"
          >
            <GeneralComment />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/info"
          >
            <InfoPage />
          </ProtectedRoute>

          <ProtectedRoute
            exact
            path="/profile/:id"
          >
            <UpdateProfile />
          </ProtectedRoute>

          <ProtectedRoute
            exact
            path="/allyRequestedCalls"
          >
            <AllyRequestedCalls />
          </ProtectedRoute>

          <ProtectedRoute
            exact
            path="/memberRequestedCall"
          >
            <MemberCallRequested />
          </ProtectedRoute>

          <ProtectedRoute
            exact
            path="/allyStartCall/:memberId/:requestedCallId"
          >
            <AllyStartCall />
          </ProtectedRoute>

          <ProtectedRoute
            exact
            path="/allyCallInProgress/:memberId"
          >
            <AllyCallInProgress />
          </ProtectedRoute>
          
          <ProtectedRoute
            exact
            path="/allyReviewCall"
          >
            <AllyReviewCall />
          </ProtectedRoute>

          <ProtectedRoute
            exact
            path="/memberReviewCall"
          >
            <MemberReviewCall />
            </ProtectedRoute>

          <ProtectedRoute
            exact
            path="/memberReportMisuse"
          >
            <MemberReportMisuse />
          </ProtectedRoute>
            
            <ProtectedRoute
            exact
            path="/allyReportMisuse"
          >
            <AllyReportMisuse />

          </ProtectedRoute>

          <Route
            exact
            path="/login"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect to the /user page
              <Redirect to="/home" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>

          <Route
            exact
            path="/registration"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/home" />
              :
              // Otherwise, show the registration page
              <RegisterPage />
            }
          </Route>

          <Route
            exact
            path="/home"
          >
            <LandingPage />
          </Route>
          <Route
            exact
            path="/ally-application"
          >
            <AllyApplication />
          </Route>

          <Route
            exact
            path="/admin"
          >
            {user.is_admin ?
              // If the user is an admin, show the admin dashboard
              <AdminDashboard />
              :
              // Otherwise, show 403 
              <h1>403</h1>
            }
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>  
        </div>      
        <BottomNav />
        {/* <Footer /> */}
      </div>
    </Router>
    </ThemeProvider>
  );
}

export default App;
