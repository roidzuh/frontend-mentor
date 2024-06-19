import Calculator from './components/Calculator';

function App() {
  return (
    <main className="bg-paleAqua h-fit flex flex-col justify-between items-center gap-10 relative md:h-screen md:justify-center ">
      <img src="/logo.svg" alt="logo-splitter" className="mt-12" />
      <Calculator />
      <p className="text-gray-600 text-sm text-center mb-4 md:col-span-2 lg:col-span-4">
        Challenge by{' '}
        <a href="https://www.frontendmentor.io" className="text-blue-800">
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a
          href="https://www.frontendmentor.io/profile/roidzuh"
          className="text-blue-800"
        >
          Roid Zuhdianto
        </a>
        .
      </p>
    </main>
  );
}

export default App;
