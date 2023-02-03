import './App.css';
import { ContactModal } from './components/ContactModal';
import { HomePage } from './components/HomePage/HomePage';
import { CanvassNav } from './components/NavBar';

function App() {

  return (
    
      <div>
        <CanvassNav />
        <HomePage />
        <ContactModal/>
      
      </div>
  );
}

export default App;

