import React from 'react';
import useStore from '../store/store';

const MainContent = () => {
  const { theme } = useStore();
  const currentDate = new Date().toLocaleDateString();

  return (
    <div className={`p-4  ${theme === 'light' ? 'lightTheme' : 'darkTheme'}`}>
      <h1 className="text-2xl font-bold">Welcome to Your Dashboard!</h1>
      <p className="mt-2">Current Date: {currentDate}</p>
    </div>
  );
};

export default MainContent;
