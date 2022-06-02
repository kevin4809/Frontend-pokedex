import { HashRouter, Routes, Route } from "react-router-dom";
import PokemonDetail from "./components/PokemonDetail";
import Pokemons from "./components/Pokemons";
import ProtectedRoutes from "./components/ProtectedRoutes";
import UserInput from "./components/UserInput";
import './styles/styles.css'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<UserInput />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/pokemons" element={<Pokemons />} />
          <Route path="/pokemons/:id" element={<PokemonDetail />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
