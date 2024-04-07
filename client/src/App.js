import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import ItemList from './components/ItemList';
import Logout from './components/Logout';
import ErrorBoundary from './components/ErrorBoundary';

const App = () => (
    <ErrorBoundary>
        <div>
            <h1>MyApp</h1>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/items" component={ItemList} />
                <Route path="/logout" component={Logout} />
                <Route path="/" component={Login} />
            </Switch>
        </div>
    </ErrorBoundary>
);

export default App;