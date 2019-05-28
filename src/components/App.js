import React from 'react';

import "normalize.css";
import '../sass/main.scss';

import Popular from './Popular';

const App = () => {
  return (
    <div className="container">
      <h1 className="app_title">Tech Trends</h1>
      <Popular />
    </div>

  )
}

export default App;