import React from 'react';

// import Header from './components/Header';
// import Description from './components/Description';
// import Stat from './components/Stat';
// import Footer from './components/Footer';
// import Counter from './components/Counter';
// import Toggle from './components/Toggle';
 import Form from './components/Form';
// import About from './components/About';
// import Home from './components/Home';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function App() {
  return (
    <div>
      {/* <Header/>
      <Description/>
      <Stat/>
      <Footer/> */}
      <Form/>
      {/* <Counter/> */}
      {/* <Toggle/> */}
      {/* <Router>

        <Link to="">Home </Link>
        <Link to="/about"> About</Link>
        <Link to="/form"> Form</Link>

        <Route exact path="/"Component={Home}/>
        <Route path="/about"Component={About}/>
        <Route path="/form"Component={Form}/>
      
      </Router> */}
      
    </div>
  );
}

export default App;
