import './App.css';
import CompLogin from './Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './index.css'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/' element={ <CompLogin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
