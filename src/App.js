import React, { Fragment } from 'react';
import ThemeToggleButton from './components/ThemeToggleButton';
import MainContent from './components/MainContent';
import QuickLinks from './components/QuickLinks';
import Footer from './components/Footer';
import useStore from './store/store';

function App() {
   const { theme } = useStore();
  
  return (
    <Fragment>
    <div className={`flex flex-col min-h-screen ${theme === 'light' ? 'lightTheme' : 'darkTheme'}`}>
      <header className="p-4 bg-gray-900 text-white flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-3xl">Personal Dashboard</h1>
        <ThemeToggleButton />
      </header>
      <main className='flex-grow p-4'>
        <MainContent />
        <QuickLinks />
      </main>
      <div className='absolute bottom-0 w-full'>
      <Footer />
      </div>
    </div>    
    </Fragment>
  );
}

export default App;

