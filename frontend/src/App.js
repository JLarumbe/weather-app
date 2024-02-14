import "bootstrap/dist/css/bootstrap.min.css";
import WeatherCard from "./components/WeatherCard.js";

function App() {
  const [] = useState("");

  return (
    <div
      className="App"
      style={{
        backgroundImage:
          "url(https://i.pinimg.com/originals/aa/96/97/aa9697a3f7a61389675b8dc109518753.gif)",
        backgroundSize: "cover",
      }}
    >
      <WeatherCard />
    </div>
  );
}

export default App;
