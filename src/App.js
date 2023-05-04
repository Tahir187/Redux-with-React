import './App.css';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const myState = useSelector((state) => state.changeTheNumber)
  return (
    <div className="App">
      <h1>React Redux</h1>
      <h4>Increment and Decrement Counter</h4>
      <hr></hr>
      <br></br>
      <br></br>
      <h2>{myState}</h2>
      <button>Increment</button>
      <button>Decrement</button>
    </div>
  );
}

export default App;
