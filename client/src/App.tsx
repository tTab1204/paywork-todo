import React, { FC } from 'react';
import Main from 'pages/Main/Main';
import { Route } from 'react-router-dom';

const App: FC<any> = () => {
  return (
    <div>
      <Route path="/" component={Main} />
    </div>
  );
};

export default App;
