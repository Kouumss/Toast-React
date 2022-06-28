import Header from "../src/components/Header/Header";
import Body from "../src/components/Body/Body";
import Footer from "../src/components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

let monStyle = { minHeight: `${window.innerHeight}px` };

function App() {
  return (
    <div style={monStyle} className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
