
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Subcard from './components/Subcard';
import SubcardFour from './components/SubcardFour';
import SubcardThree from './components/SubcardThree';
import SubcardTwo from './components/SubcardTwo';


function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="card">
          <h4> Eden</h4>
          <Routes>
            <Route path='/' element={<Subcard />} />
            <Route path='/secondPage' element={<SubcardTwo />} />
            <Route path='/ThirdPage' element={<SubcardThree />} />
            <Route path='/FourthPage' element={<SubcardFour />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
