
import { BrowserRouter as Router, Route } from "react-router-dom"
import Navbar from './components/Navbar' ;
import Home from './pages/Home' ;

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route exact path="/" component={Home} ></Route>
        <Route exact path="/about" ></Route>
        <Route exact path="/add-movie"></Route>
      </Router>
      

    </div>
  );
}

export default App;
