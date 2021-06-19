import React ,{useState}  from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './scss/style.scss';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import UserContext from './userContext';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'));
const Register = React.lazy(() => import('./views/pages/register/Register'));
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));
const Rfid = React.lazy(() => import('./views/dashboard/Home Page/rfid'));
const ChangePassword = React.lazy(() => import('./containers/TheLayout'));
const EmployeeHome = React.lazy(() => import('./containers/TheLayout'));
const Settings = React.lazy(() => import('./containers/TheLayout'));
const LeaveApplication = React.lazy(() => import('./containers/TheLayout'));
const Employeeot = React.lazy(() => import('./containers/TheLayout'));

function App () {

  const [ userData, setUserData] = useState({
    id:"",
    user: "",

  });


    return (
      <HashRouter>
          <UserContext.Provider value={{ userData, setUserData }}>
          <React.Suspense fallback={loading}>
            <Switch>
              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/Employee Home" name="EmployeeHome"  render={props => <EmployeeHome {...props}/>} />
              <Route exact path="/Employeeot" name="Employeeot"  render={props => <Employeeot {...props}/>} />
              <Route exact path="/Leave Application" name="LeaveApplication"  render={props => <LeaveApplication {...props}/>} />
              <Route exact path="/Change Password" name="ChangePassword"  render={props => <ChangePassword {...props}/>} />
              <Route exact path="/Settings" name="Settings"  render={props => <Settings {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
              <Route exact path="/TheLayout" name="Home" render={props => <TheLayout {...props}/>} />
              <Route path="/" name="Rfid" render={props => <Rfid {...props}/>} />
            </Switch>
          </React.Suspense>
           </UserContext.Provider>
      </HashRouter>
    );

}

export default App;
