import React from 'react';
import useStore from '../store/store';

const ToggleButton = () => {
  const { theme, toggleTheme } = useStore();

  return (
    <label className='flex'>
       <div className="ms-3 text-sm font-medium dark:text-textDark flex justify-start mr-3">
        {theme == 'dark'? 'Dark' : 'Light'}
      </div>
      <input
        type="checkbox"
        checked={theme === 'dark'}
        onChange={toggleTheme}
        value=""
        className="sr-only peer"
      />
      <div className="toggle-slider">
        <div className={`toggle-knob ${theme === 'dark' ? 'translate-x-full' : ''}`} />
      </div>
     
    </label>
  );
};

export default ToggleButton;
