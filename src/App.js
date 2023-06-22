import "./styles/main.css";
import "./styles/reset.css";
import Nav from "./components/nav/Nav"
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
