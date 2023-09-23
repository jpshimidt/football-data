import './App.css';
import getListTournament from '../services/api';

function App() {
  return (
    <div className="App">
      <h1>Xuxa</h1>
      <button onClick={() => getListTournament() }> Click aqui!</button>

    </div>
  );
}

export default App;