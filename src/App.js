import './styles/main.css';
import Welcome from './pages/Welcome';
import StepOne from './pages/StepOne'
import StepTwo from './pages/StepTwo'
import { useState } from 'react'

function App() {
  return (
    <div className="App">
      {/* <Welcome /> */}
      <StepTwo />
    </div>
  );
}

export default App;
