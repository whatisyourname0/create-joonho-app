import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

function Router() {
  const router = createBrowserRouter(createRoutesFromElements(<Route />));

  return <RouterProvider router={router} />;
}

export default Router;
