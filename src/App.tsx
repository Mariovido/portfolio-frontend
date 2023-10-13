import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Portfolio from './pages/Portfolio';

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

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />{' '}
    </div>
  );
}

export default App;
