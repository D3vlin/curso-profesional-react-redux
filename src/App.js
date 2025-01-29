import { Col, Spin } from 'antd';
import './App.css'
import logo from './statics/logo.svg'
import { Searcher } from './Components/Searcher';
import { PokemonList } from './Components/PokemonList';
import { getPokemons } from './api';
import { useEffect } from 'react';
import { getPokemonsWithDetails, setLoading } from './actions';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

function App() {
  const pokemons = useSelector(state => state.getIn(['data', 'pokemons'], shallowEqual)).toJS()
  const loading = useSelector(state => state.getIn(['ui', 'loading']))
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setLoading(true))

    const fetchPokemons = async () => {
      const pokemonsRsp = await getPokemons()
      dispatch(getPokemonsWithDetails(pokemonsRsp))
      dispatch(setLoading(false))
    }

    fetchPokemons();
  }, [])

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt='pokedux' />
        <Searcher />
      </Col>
      {
        loading ?
          <Col offset={12} >
            <Spin spinning size='large' />
          </Col>
          :
          <PokemonList pokemons={pokemons} />
      }
    </div>
  );
}

export default App;
