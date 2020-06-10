import React from 'react';
import classes from './App.module.scss';
import Header from './components/Header/Header';
import Content from './components/Content/Content';

function App() {
  return (
    <div className={classes.App}>
      <Header/>
      <Content/>
    </div>
  );
}

export default App;
