import './App.css';
import {Router,Route} from "react-router-dom"
import Home from './Home/Home';
import Courses from './Courses/Courses';
import About from './About/About';
import Contact from './Contact/Contact';

function App() {
  return (
    <>
    <Router>
    <Route exact path="/" Component={Home}></Route>
    <Route  path="/courses" Component={Courses}></Route>
      <Route path='/about' Component={About}></Route>
      <Route path="/contact" Component={Contact}></Route>
    </Router>
    </>
  );
}

export default App;
