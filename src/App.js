import { Col } from 'antd';
import './App.css'
import { Searcher } from './Components/Searcher';
import { PokemonList } from './Components/PokemonList';

function App() {
  return (
    <div className="App">
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList />
    </div>
  );
}

export default App;
