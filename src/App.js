import { Col } from 'antd';
import './App.css'
import logo from './statics/logo.svg'
import { Searcher } from './Components/Searcher';
import { PokemonList } from './Components/PokemonList';

function App() {
  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt='pokedux' />
        <Searcher />
      </Col>
      <PokemonList />
    </div>
  );
}

export default App;
