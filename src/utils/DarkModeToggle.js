import React from 'react';
import useDarkMode from 'use-dark-mode';
import { FiMoon, FiSun } from 'react-icons/fi';

// use-dark-mode pone body.dark-mode / body.light-mode; index.css cambia la paleta según esa clase.
const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);
  const label = darkMode.value ? 'Activar modo claro' : 'Activar modo oscuro';

  return (
    <button type="button" className="icon-button" onClick={darkMode.toggle} aria-label={label} title={label}>
      {darkMode.value ? <FiSun /> : <FiMoon />}
    </button>
  );
};

export default DarkModeToggle;
