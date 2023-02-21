import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ContactModal } from './components/ContactModal';
import { HomePage } from './components/HomePage/HomePage';
import { Works } from './components/HomePage/HPComponents/HPcomponents/Works';
import { CanvassNav } from './components/NavBar';

function App() {

  return (
    
      <div>
        <CanvassNav />
        <HomePage />
        <ContactModal/>

        <Routes>
          <Route path='/works' element={<Works />} />
        </Routes>
      
      </div>

  );
}

export default App;

