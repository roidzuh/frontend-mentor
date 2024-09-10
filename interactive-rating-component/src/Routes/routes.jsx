import Rating from '../components/layout/Rating';
import Thanks from '../components/layout/Thanks';
import Home from '../components/page/Home';

export const routeList = [
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/',
        element: <Rating />,
      },
      {
        path: 'thanks',
        element: <Thanks />,
      },
    ],
  },
];
