import logo from "./logo.svg";
import "./App.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import Calendar from "./calendar.js";

function App() {
  return (
    <div className="App">
      <Calendar />
    </div>
  );
}

export default App;
