import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import WhatsappContact from './components/core/ContactUs/whatsappContact/WhatsappContact';

function App() {

  return (
    <div className="">
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
      <WhatsappContact />
    </div>
  );
}

export default App;
