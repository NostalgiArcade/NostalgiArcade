import './App.css';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar>
          {/* Insert all components as exported from pages*/}
          <Route path='' exact component={Profile} />
        </Navbar>
      </Router>
    </div>
  );
}

export default App;
