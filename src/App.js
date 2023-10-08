import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
  // ALL THESE ARE USED TO route to different pages in react(homepage about page)
} from "react-router-dom";
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';

import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
         
          <div className="container" >
            <Switch>
            {/* path leading to the designated page */}
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/about">
                <About />

                 </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/signup">
                <Signup />
              </Route>
            </Switch>
          </div>
          

        </Router>
      </NoteState>
    </>
  );
}

export default App;
