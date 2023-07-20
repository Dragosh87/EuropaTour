// import CentralContext from './Components/CentralContext';
import AlbaniaPage from './Countries/AlbaniaPage';
import FrancePage from './Countries/FrancePage';
import IcelandPage from './Countries/IcelandPage'
import GreecePage from './Countries/GreecePage';
import AustriaPage from './Countries/AustriaPage';
import CzechRepPage from './Countries/CzechRepPage';
import ItalyPage from './Countries/ItalyPage';
import MaltaPage from './Countries/MaltaPage';
import RomaniaPage from './Countries/RomaniaPage';
import SpainPage from './Countries/SpainPage';
import MoldovaPage from './Countries/MoldovaPage';
import TurkeyPage from './Countries/TurkeyPage';
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
  {
    path: '/austria',
    element: <AustriaPage/>,
    exact: true
  },
  {
    path: '/czech',
    element: <CzechRepPage/>,
    exact: true
  },
  {
    path: '/italy',
    element: <ItalyPage/>,
    exact: true
  },
  {
    path: '/malta',
    element: <MaltaPage/>,
    exact: true
  },
  {
    path: '/romania',
    element: <RomaniaPage/>,
    exact: true
  },
  {
    path: '/spain',
    element: <SpainPage/>,
    exact: true
  },
  {
    path: '/moldova',
    element: <MoldovaPage/>,
    exact: true
  },  
  {
    path: '/turkey',
    element: <TurkeyPage/>,
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
  {
    path: '/france',
    element: <FrancePage/>,
    exact: true
  },
  {
    path: '/greece',
    element: <GreecePage/>,
    exact: true
  },
  {
    path: '/iceland',
    element: <IcelandPage/>,
    exact: true
  },
 
  
]);

export default routes;
