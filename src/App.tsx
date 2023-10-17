import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CONFIG } from './config/config';
import { Worker } from '@react-pdf-viewer/core';
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

const workerUrl =
  'https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js';

function App() {
  return (
    <div className="app">
      <QueryClientProvider client={queryClient}>
        <Worker workerUrl={workerUrl}>
          {/* TODO - CHANGE FALLBACK */}
          <Suspense fallback={<div></div>}>
            <RouterProvider router={router} />
          </Suspense>
        </Worker>
      </QueryClientProvider>
    </div>
  );
}

export default App;
