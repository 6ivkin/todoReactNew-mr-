import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <>1</>,
    children: [
      {
        index: true,
        element: <>todo list</>,
      },
      {
        path: ':id',
        element: <>todo detail</>,
      },
    ],
  },
])
