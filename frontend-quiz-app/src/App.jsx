import { useRoutes } from 'react-router-dom';
import { routeList } from './routes/routes';

function App() {
  const elemen = useRoutes(routeList);
  return elemen;
}

export default App;
