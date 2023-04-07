
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './Components/Contact';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ListMovies from './Components/ListMovies';
import Trailler from './Components/Trailler';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <NavBar />
     <Routes>
     <Route path= "/" element= {<Home/>} />
     <Route path="/Movies" element={<ListMovies/>} />
     <Route path='/Contact/:name/:id' element={<Contact/>}/>
     <Route path="/trailler/:id" element={<Trailler/>}/> 
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
