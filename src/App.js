import { Col } from 'antd';
import './App.css'
import logo from './statics/logo.svg'
import { Searcher } from './Components/Searcher';
import { PokemonList } from './Components/PokemonList';
import { getPokemons } from './api';
import { useEffect } from 'react';
import { setPokemonsActions } from './actions';
import { connect } from 'react-redux';

function App({ pokemons, setPokemons }) {
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

const mapStateToProps = (state) => ({
  pokemons: state.pokemons
})

const mapDispatchToProps = (dispach) => ({
  setPokemons: (payload) => dispach(setPokemonsActions(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
