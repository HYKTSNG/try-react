import "./App.css";
import HeaderSlide from "./component/HeaderSlide";
import HelloWorld from "./component/helloWorld";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <div>
          <HeaderSlide />
        </div> */}
        <div>
          <HelloWorld />
        </div>
      </header>
    </div>
  );
}

export default App;

// npm start で起動できる
