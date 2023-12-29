import './App.css';
import PokemonList from './Components/PokemonList';
import Navbar from './Components/Nav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/firstgeneration' element={<PokemonList startSlice={0} endSlice={151} />} />
        <Route path='/secondgeneration' element={<PokemonList startSlice={152} endSlice={251} />} />
        <Route path='/thirdgeneration' element={<PokemonList startSlice={252} endSlice={386} />} />
        <Route path='/fourthgeneration' element={<PokemonList startSlice={387} endSlice={493} />} />
        <Route path='/fifthgeneration' element={<PokemonList startSlice={494} endSlice={649} />} />
        <Route path='/sixthgeneration' element={<PokemonList startSlice={650} endSlice={721} />} />
        <Route path='/seventhgeneration' element={<PokemonList startSlice={722} endSlice={809} />} />
        <Route path='/eighthgeneration' element={<PokemonList startSlice={810} endSlice={905} />} />
        <Route path='/ninethgeneration' element={<PokemonList startSlice={906} endSlice={1015} />} />
      </Routes>
    </Router>
  );
};

export default App;