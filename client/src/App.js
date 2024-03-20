import React from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import ItemList from './components/ItemList';

const App = () => (
    <ErrorBoundary>
        <div>
            <h1>MyApp</h1>
            <ItemList />
        </div>
    </ErrorBoundary>
);

export default App;