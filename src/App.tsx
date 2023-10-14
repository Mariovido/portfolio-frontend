import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const Portfolio = lazy(() => import('./pages/Portfolio'));

import './App.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Portfolio />,
    // children: [
    // {index: true, element:}
    // ],
  },
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
