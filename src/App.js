import { Col } from 'antd';
import './App.css'
import logo from './statics/logo.svg'
import { Searcher } from './Components/Searcher';
import { PokemonList } from './Components/PokemonList';
import { getPokemons } from './api';
import { useEffect, useState } from 'react';

function App() {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    const fetchPokemons = async () => {
      setPokemons(await getPokemons())
    }

    fetchPokemons();
  }, [])

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt='pokedux' />
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default App;
