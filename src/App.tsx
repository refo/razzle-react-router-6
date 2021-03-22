import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import 'tailwindcss/tailwind.css';
import * as Pages from 'pages';

const App: React.FC<{}> = function App() {

  return (
    <div className="container mx-auto p-10 bg-yellow-100">
      <h1 className="text-2xl font-semibold">App</h1>
      <div><Link to="home">to Home</Link> </div>
      <Routes>
        <Route path="home" element={<Pages.Home />}>
          <Route path="example1" element={<Pages.Example1 />} />
          <Route path="example2" element={<Pages.Example2 />} />
        </Route>
      </Routes>
    </div>
  );

}

export default App;
