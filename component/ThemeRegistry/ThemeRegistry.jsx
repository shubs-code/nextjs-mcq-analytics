'use client';
import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ColorModeContext, getDesignTokens, getThemedComponents} from './theme';
import { deepmerge } from '@mui/utils';



export default function ThemeRegistry({ children }) {

  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        console.log("theming")
        setMode((prevMode) =>
          prevMode === 'light' ? 'dark' : 'light',
        );
      },
    }),
    [],
  );
  console.log(mode)

  let theme = React.useMemo(
    () =>
      createTheme(deepmerge(getDesignTokens(mode), getThemedComponents(mode))),
    [mode]
  );


  return (
    <ColorModeContext.Provider  value={colorMode}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {children}
      </ThemeProvider>

    </ColorModeContext.Provider>
      );
}
