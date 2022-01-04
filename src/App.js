
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Students from './Components/Students';
import Contact from './Components/Contact';

import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Router>
        <Header />
          <Routes >

            <Route path="/" element={<Home />}/>           
            <Route path="/home" element={<Home />}/>
            <Route path="/students" element={<Students />}/>
            <Route path="/contact" element={ <Contact />}/>

          </Routes>

     </Router>

    </div>
  );
}

export default App;
