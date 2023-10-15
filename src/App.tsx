import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CONFIG } from './config/config';
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Resume = lazy(() => import('./pages/Resume'));
const NotFound = lazy(() => import('./pages/NotFound'));

import './App.scss';

const router = createBrowserRouter([
  {
    path: `/${CONFIG.VITE_REACT_APP_BASE_URL}`,
    children: [
      { index: true, element: <Portfolio /> },
      { path: 'resume', element: <Resume /> },
    ],
  },
  { path: '*', element: <NotFound /> },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <div className="app">
      <QueryClientProvider client={queryClient}>
        {/* TODO - CHANGE FALLBACK */}
        <Suspense fallback={<div></div>}>
          <RouterProvider router={router} />
        </Suspense>
      </QueryClientProvider>
    </div>
  );
}

export default App;
