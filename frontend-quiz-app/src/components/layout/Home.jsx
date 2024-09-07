import { useTheme } from '../../Context/ThemeContext';
import { Header } from '../Header';

import { Outlet } from 'react-router-dom';

function Home() {
  const { theme } = useTheme();

  return (
    <div
      className={`${
        theme === 'light'
          ? 'bg-mobile-light bg-lightGrey md:bg-tablet-light xl:bg-desktop-light'
          : 'bg-mobile-dark bg-darkNavy md:bg-tablet-dark xl:bg-desktop-dark'
      } min-h-screen bg-no-repeat xl:bg-cover `}
    >
      <Header />
      <main className="mt-8 mx-6 md:mx-16 xl:mx-[140px]">
        <Outlet />
      </main>
    </div>
  );
}

export default Home;
