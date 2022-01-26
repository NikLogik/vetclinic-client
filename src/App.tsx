import React from 'react';
import './app.scss';

import AppMenu from './components/menu/AppMenu';
import WorkArea from './components/work-area/WorkArea';

function App() {
  return (
    <div className="app">
      <AppMenu />
      <WorkArea/>
    </div>
  );
}

export default App;
