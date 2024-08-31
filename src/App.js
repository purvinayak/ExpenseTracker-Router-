import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Registration from './Registration';
import Expenses from './Expenses';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import PrivateRouter from './PrivateRouter';

function App() {
  return (
    <div className="App">
      <Router>
    <Routes>
    <Route path="/Login" element={<Login/>} />
    <Route path="/" element={<Registration/>} />
    {/* <Route path="/Expenses" element={<Expenses/>} /> */}
    <Route path="/Expenses" element={<PrivateRouter><Expenses/></PrivateRouter>}/>
    
  </Routes>
 </Router> 
    </div>
  );
}

export default App;
