import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import JobList from './components/JobList';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/jobs" component={JobList} />
      </div>
    </Router>
  );
}

export default App;
