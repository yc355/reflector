import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import './App.css';

import Translated from './components/translated.jsx'

function App() {
  return (
    <Router>
      <Route path="/" component={Translated} />
    </Router>
  );
}

export default App;
