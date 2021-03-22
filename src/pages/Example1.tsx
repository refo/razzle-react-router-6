import React from 'react';
import { Link } from 'react-router-dom';

const Example1: React.FC<{}> = function Example1() {

  return (
    <div className="p-10 bg-yellow-300">
      <h2 className="text-xl font-semibold">Example 1</h2>
      <div>
        <Link to="../">Go up</Link>
      </div>
      <div>
        <Link to="/">Go root</Link>
      </div>
    </div>
  );

}

export default Example1;
