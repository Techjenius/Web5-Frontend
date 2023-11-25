import logo from "./logo.svg";
import "./App.css";
import DeveloperList from "./components/atoms/developers";

function App() {
  // Example using fetch
  fetch("http://localhost:3001/api/data")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));

  return (
    <div className="App">
      <h1>Just running a simple code to test the backend and frontend connection.</h1>
      <DeveloperList />
    </div>
  );
}

export default App;
