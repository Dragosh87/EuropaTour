// import CentralContext from './Components/CentralContext';
import AlbaniaPage from './Countries/AlbaniaPage';
import AustriaPage from './Countries/AustriaPage';
import Home from './HomePage';
import TipsPage from './TipsPage';

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
    path: '/tips',
    element: <TipsPage/>,
    exact: true
  },
  {
    path: '/austria',
    element: <AustriaPage/>,
    exact: true
  },

  // Alte rute
]);

export default routes;