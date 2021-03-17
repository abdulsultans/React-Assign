import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Foot from './components/Foot';
import {Content} from './components/Content';
import BeFoot from './components/BeFoot';
import Card from './components/Card';

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Content />
      <Card />
      <Foot />
      <Contact />
      <BeFoot />
    </>
  );
}

export default App;
