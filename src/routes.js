import CentralContext from './Components/CentralContext';
import AlbaniaPage from './Countries/AlbaniaPage';

const routes = [
  {
    path: '/',
    component: CentralContext,
    exact: true
  },
  {
    path: '/countries/albania',
    component: AlbaniaPage
  },
  // Alte rute
];

export default routes;