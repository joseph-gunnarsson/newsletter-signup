import logo from './logo.svg';
import './App.css';
import './assets/sass/style.scss';
import SignUp from "./components/SignUp.js"
import Success from "./components/Success.js"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/success/:email" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
