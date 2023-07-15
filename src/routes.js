// import CentralContext from './Components/CentralContext';
import AlbaniaPage from './Countries/AlbaniaPage';
import ItalyPage from './Countries/ItalyPage';
import Home from './HomePage';
import TipsPage from './TipsPage';
import LoginPage from './LoginPage';
import RegistrationPage from './RegistrationPage';



import {
  createBrowserRouter,
} from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    exact: true
  },
  {
    path: '/albania',
    element: <AlbaniaPage/>,
    exact: true
  },
  // {
  //   path: '/austria',
  //   element: <AustriaPage/>,
  //   exact: true
  // },
  {
    path: '/italy',
    element: <ItalyPage/>,
    exact: true
  },
  {
    path: '/tips',
    element: <TipsPage/>,
    exact: true
  },
  {
    path: '/login',
    element: <LoginPage/>,
    exact: true
  },
  {
    path: '/register',
    element: <RegistrationPage/>,
    exact: true
  },
 
  // Alte rute
]);

export default routes;