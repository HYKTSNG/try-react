import "./App.css";
import HelloWorld from "./component/helloWorld.tsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <HelloWorld />
        </div>
      </header>
    </div>
  );
}

export default App;

// npm start で起動できる
