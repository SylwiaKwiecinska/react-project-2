import './reset.css';
import './App.css';
import Header from './Components/Header';
import Logo from './Components/Logo';
import Section from './Components/Section';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Logo/>
      <Header/>
      <Section/>
      <Option title="EUR"/>
      <Option title="USD"/>
      <Option title="CHf"/>
      <Footer/>
    </div>
  );
}

export default App;
