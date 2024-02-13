import { useState } from 'react';
import ReactDOM from 'react-dom'; 
import Timmer from './Timmer.jsx'
import './App.css';

// const root = document.getElementById("root");
// const create_root = ReactDOM.createRoot(root);

const App = () => {
  const [showComponent, setShowComponent] = useState(true);

  const toggleTimer = () => {
    setShowComponent(!showComponent);
  };

  return (
    <div>
      <h1>My React App</h1>
      <button onClick={toggleTimer}>
        {showComponent ? 'Hide Timmer' : 'Show Timmer'}
      </button>
      {showComponent && <Timmer/>}
    </div>
  );
};

export default App;
