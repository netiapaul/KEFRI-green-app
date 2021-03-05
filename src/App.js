import './App.css';
import Login from './components/login/login';
import Home from './components/home/home';
import { BrowserRouter as Router,Route  } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        {/* <Login /> */}
        <Route path="/home" component={Home} />
      </div>
    </Router>
    
  );
}

export default App;
