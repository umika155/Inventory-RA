import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import AppRouter from './Components/Routes/AppRouter';

const App = () => {
  return (
    <div>
      <CssBaseline />
      <AppRouter />
    </div>
  );
};

export default App;
