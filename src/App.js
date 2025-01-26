import { Col } from 'antd';
import './App.css'
import logo from './statics/logo.svg'
import { Searcher } from './Components/Searcher';
import { PokemonList } from './Components/PokemonList';
import { getPokemons } from './api';
import { useEffect } from 'react';
import { getPokemonsWithDetails } from './actions';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const pokemons = useSelector(state => state.pokemons)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRsp = await getPokemons()
      dispatch(getPokemonsWithDetails(pokemonsRsp))
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
