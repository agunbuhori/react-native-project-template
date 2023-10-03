import {ThemeContext} from '@/contexts/ThemeContext';
import {useContext, useEffect} from 'react';

const useTheme = () => {
  const themeContext = useContext(ThemeContext);

  useEffect(() => {
    themeContext.changeStatusBar(
      themeContext.theme === 'dark' ? 'light-content' : 'dark-content',
    );
  }, [themeContext.theme]);

  return themeContext;
};

export default useTheme;
