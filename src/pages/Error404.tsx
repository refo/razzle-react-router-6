import React from 'react';
import { Link } from 'react-router-dom';

const Error404: React.FC<{}> = function Error404() {

  return (
    <div className="p-10 bg-yellow-300">
      <h2 className="text-xl font-semibold">Not found</h2>
      <div>
        <Link to="/">go back to Home</Link>
      </div>
    </div>
  );

}

export default Error404;
