import Index from './components/pages/Index';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contacts from './components/pages/Contacts';
import Notfound from './components/pages/Notfound';

export default [
  {
    ...Index,
    routes: [
      {
        ...Home,
        path: '/',
        exact: true,
      },
      {
        ...About,
        path: '/about',
      },
      {
        ...Contacts,
        path: '/contacts',
      },
      {
        ...Notfound,
      },
    ],
  },
];
