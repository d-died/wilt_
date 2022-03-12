import React from 'react';
import ReactDOM from 'react-dom';
import { 
  BrowserRouter as Router, 
  Routes,
  Route  } 
  from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'


ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/graphs'/> 
      {/* eventually ^ this will need to element={<Graph />} */}
      <Route path='/posts'/>
      <Route path='/myposts'/>
      <Route path ='/about'/>
    </Routes>
      
  </Router>
    
, document.getElementById('root'));