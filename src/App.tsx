import { RouterProvider } from "react-router-dom";
import { useMemo, useState } from "react";

import "./App.scss";

import { router } from "./router";
import { ThemeContext } from "./core/contexts/theme.context";
import { Theme } from 'core/enums';
import { ModalProvider } from 'core/contexts';


function App() {
  const isBrowserDefaulDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;
  const getDefaultTheme = (): string => {
    const localStorageTheme = localStorage.getItem('default-theme');
    const browserDefault = isBrowserDefaulDark() ? Theme.DARK : Theme.LIGHT;
    return localStorageTheme ?? browserDefault;
  };

  const [theme, setTheme] = useState(getDefaultTheme());

  const contextValue = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      <ModalProvider>
        <div className={`App theme-${theme}`}>
          <RouterProvider router={router} fallbackElement={<>LOADING...</>} />
        </div>
      </ModalProvider>

    </ThemeContext.Provider>
  );
}

export default App;
