import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./helloWorld/helloWorld";
import SumCalculator from "./SumCalculator/SumCalculator";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <MyComponent />
        </div>
        <div>
          <SumCalculator />
        </div>
      </header>
    </div>
  );
}

export default App;

// npm start で起動できる
