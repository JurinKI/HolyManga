import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Header from './component/Header';
import Footer from './component/Footer';
import Hero from './component/Hero';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      
      <Header/>
      <Home/>
      <Hero/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
