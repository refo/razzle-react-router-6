import React from 'react';
import { Link, Route, Routes, useRoutes } from 'react-router-dom';

import 'tailwindcss/tailwind.css';
import * as Pages from 'pages';
import generatePath from 'helpers/generatePath';
import AppRoutes from 'routes';

const App: React.FC<{}> = function App() {

  generatePath<{ id: number }>('/detail/:id', { id: 12 });

  return (
    <div className="container mx-auto p-10 bg-yellow-100">
      <h1 className="text-2xl font-semibold">App</h1>
      <div><Link to="home">to Home</Link> </div>

      <AppRoutes />

    </div>
  );

}

export default App;
