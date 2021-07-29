import Navbar from './Navbar';
import { useState } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './Home';
import About from './About';
import Profile from './Profile';
import Dashboard from './Dashboard'
const App=()=>{
    const [isLogged,setIsLogged]=useState(false);
    return (
        <Router>
            <div className="app">
                <Navbar isLogged={isLogged} setIsLogged={setIsLogged}/>
                <div className="content">
                    <Switch>
                        <Route exact path='/'>
                            <Home isLogged={isLogged} setIsLogged={setIsLogged}/>
                        </Route>
                        <Route exact path='/about'>
                            <About/>
                        </Route>
                        <Route exact path='/profile'>
                            <Profile/>
                        </Route>
                        <Route exact path='/dashboard'>
                            <Dashboard/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}
export default App;