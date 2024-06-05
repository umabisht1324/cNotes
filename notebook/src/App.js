import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Welcome from './components/Welcome';
import Register from './components/Register';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Use element prop instead of component prop for the root route */}
        <Route path="/" element={<LoginForm />} />
        <Route path="/welcome" component={Welcome} />
        <Route path="/register" component={Register} />
        {/* Additional routes */}
      </Routes>
    </Router>
  );
};

export default App;
