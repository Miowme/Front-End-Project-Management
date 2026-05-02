import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Dashboard from './components/pages/Dashboard';
import Login from './components/pages/Auth/Login';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Project from './components/pages/Projects';
import DetailProject from './components/pages/Projects/DetailProject';
import Settings from './components/pages/Settings';

const theme = createTheme({
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/projects',
    element: <Project />,
  },
  {
    path: '/projects/:id',
    element: <DetailProject />,
  },
  {
    path: '/settings',
    element: <Settings />,
  },
]);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <CssBaseline />
        <RouterProvider router={router} />
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default App;
