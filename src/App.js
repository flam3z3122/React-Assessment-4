import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Students from './Components/Students';
import Contact from './Components/Contact';
import {Studentdata} from './Components/Context'
import AddStudent  from './Components/AddStudent'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import EditStudent from './Components/EditStudent';

function App() {
  return (

    <Studentdata >
    <div className="App">
     <Router>
        <Header />
          <Routes >

            <Route path="/" element={<Home />}/>           
            <Route path="/home" element={<Home />}/>
            <Route path="/students" element={<Students />}/>
            <Route path="/contact" element={ <Contact />}/>
            
            <Route path="/addstudent" element={ <AddStudent />}/>
            <Route path='/addstudent/:id' element={<EditStudent />} />
           

          </Routes>

     </Router>

   
    </div>
    </Studentdata>
  );
}

export default App;
