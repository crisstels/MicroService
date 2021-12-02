import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Button from '@mui/material/Button';
import Home from './Home.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
  
}

export default App;
