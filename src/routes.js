// import CentralContext from './Components/CentralContext';
import AlbaniaPage from './Countries/AlbaniaPage';
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

  // Alte rute
]);

export default routes;