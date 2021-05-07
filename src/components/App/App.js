import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';

// pages
import Home from '../../pages/Home/Home';
import Results from '../../pages/Results/Results';

import styles from './App.module.css';

require('dotenv').config();

function App() {
    return (
        <Router>
            <div className={styles.app}>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/results">
                        <Results />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
