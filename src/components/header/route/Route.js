



import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import { BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import Home from './components/header/home/Home';
import About from './components/header/about/About';
import Service from './components/header/services/Service';
import Tutor from './components/header/tutors/Tutor';
import Contact from './components/header/contact/Contact';
const Route = () => {
    return (
        <div>
    
      <Router>
      <Header></Header>
      <Switch>
<Route exact path="/home">
<Home></Home>
</Route>
<Route exact path="/about">
  <About></About>
</Route>
<Route exact path="/services">
  <Service></Service>
</Route>
<Route exact path ="/tutors">
  <Tutor></Tutor>
</Route>
<Route exact path ="/contact">
  <Contact></Contact>
</Route>
      </Switch>
      </Router>
    </div>
  );
}


 
        
    


export default Route;