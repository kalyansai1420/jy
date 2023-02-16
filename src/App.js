import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from './Footer/Footer';
import Home from './Home/Home';

function App() {
  return (
    <div className="app">
      {/* <NavBar/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
