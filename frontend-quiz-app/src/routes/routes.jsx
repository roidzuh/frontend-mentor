import Home from '../components/layout/Home';
import { Quiz } from '../components/Quiz';
import Result from '../components/Result';
import { StartMenu } from '../components/StartMenu';

export const routeList = [
  {
    path: '/',
    element: <Home />, // Komponen induk yang menggunakan Outlet
    children: [
      {
        path: '/', // Rute default
        element: <StartMenu />,
      },
      {
        path: 'quiz/:title', // Rute untuk halaman quiz
        element: <Quiz />,
      },
      {
        path: 'quiz/:title/result', // Rute untuk halaman result
        element: <Result />,
      },
    ],
  },
];
