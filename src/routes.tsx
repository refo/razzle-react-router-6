import React from 'react';

import loadable from "@loadable/component";
import { useRoutes } from "react-router";

const Home = loadable(() => import('pages/Home'));
const Example1 = loadable(() => import('pages/Example1'));
const Example2 = loadable(() => import('pages/Example2'));
const Error404 = loadable(() => import('pages/Error404'));

export default function AppRoutes() {
  return useRoutes([
    {
      path: '',
      element: <Home />,
    },
    {
      path: 'example1',
      element: <Example1 />,
    },
    {
      path: 'example2',
      element: <Example2 />,
    },
    {
      path: '*',
      element: <Error404 />,
    },
  ]);
}
