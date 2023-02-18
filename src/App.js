import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Fashion from "./components/Fashion"
import Error from "./components/Error"

import Mens from './components/Mens';
import Womens from './components/Womens';
import Kids from './components/Kids';

import Small from './components/Small'
import Medium from './components/Medium'

function App() {
  return (
    <div className="App">
        <Router>

          <Header />

          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />

            <Route path='/fashion' element={<Fashion />} >

                <Route path='mens' element={<Mens />} >
                    <Route path='small' element={<Small />} />
                    <Route path='medium' element={<Medium />} />
                </Route>  

                <Route path='womens' element={<Womens />} />
                <Route path='kids' element={<Kids />} />
            </Route>

            <Route path='*' element={<Error/ >} />

          </Routes>
        </Router>


    </div>
  );
}

export default App;
