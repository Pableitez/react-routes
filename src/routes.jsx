import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Home from './paginas/Home';
import Projects from './paginas/Projects';
import Resume from './paginas/Resume';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'projects', element: <Projects /> },
      { path: 'resume', element: <Resume /> },
    ],
  },
]);
