import React from 'react';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';

const Home: React.FC<{}> = function Example1() {

  return (
    <div className="p-10 bg-yellow-200">
      <h2 className="text-2xl font-semibold">Home</h2>
      <div> <Link to="example1">Example 1</Link> </div>
      <div> <Link to="example2">Example 2</Link> </div>
      <Outlet />
    </div>
  );

}
export default Home;
