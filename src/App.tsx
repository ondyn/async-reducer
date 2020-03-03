import * as React from 'react';
import './App.css';
import { CounterProvider } from './context/CounterContext';
import Counter from './components/Counter';

const App = () => (
  <div className="App">
    <h1>Async Reducer Example</h1>
    <CounterProvider>
      <Counter />
    </CounterProvider>
  </div>
);

export default App;
