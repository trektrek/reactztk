import { Helmet } from 'react-helmet';
import Header from './components/Header';
import Slider from './components/Slider';
import Striper from './components/Striper';
import About from './components/About';
import Team from './components/Team';
import Services from './components/Services';
import Customers from './components/Customers';
import Cases from './components/Cases';
import Blog from './components/Blog'
import Contacts from './components/Contacts'
import Footer from './components/Footer';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/output.css';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Zerotrack ! Inteligência Digital</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Helmet>
      <Header/>
      <Slider/>
      <Striper />
      <About />
      <Team />
      <Services />
      <Customers/>
      <Cases/>
      <Blog />
      <Contacts/>
      <Footer/>
    </div>
  )
}
export default App;
