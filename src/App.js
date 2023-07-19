import logo from "./logo.svg";
import "./App.css";
import Input from "./components/Input";

function App() {
  return (
    <div className="App">
      <Input renderTextBelow={(value) => <>The value is {value}</>} />
      <br />
      <Input
        renderTextBelow={(value) => <>The multipled value is {value * 10}</>}
      />
    </div>
  );
}

export default App;
