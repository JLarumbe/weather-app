import "bootstrap/dist/css/bootstrap.min.css";
import WeatherCard from "./components/WeatherCard.js";

function App() {
  return (
    <div className="App">
      <div className="jumbotron text-center">
        <h1>My First Bootstrap Page</h1>
        <p>Resize this responsive page to see the effect!</p>
        <WeatherCard />
      </div>
    </div>
  );
}

export default App;
