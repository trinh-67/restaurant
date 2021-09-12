import logo from './logo.svg';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import './App.css';
import HomeTemplate from './templates/HomeTemplate';
import ComingTemplate from './templates/ComingTemplate';

import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import News from './pages/News/News';
import Gallery from './pages/Gallery/Gallery';
import Blog from './pages/Blog/Blog';
import ComingSoon from './pages/ComingSoon/ComingSoon';
import ReservationModal from './Components/Modal/ReservationModal';
import Cart from './pages/Cart/Cart';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <ReservationModal />
        <Switch>
          <HomeTemplate path ="/" exact Component={Home} />
          <HomeTemplate path = "/home" exact Component={Home} />
          <HomeTemplate path = "/menu" exact Component={Menu} />
          <HomeTemplate path = "/about" exact Component={About} />
          <HomeTemplate path ="/contact" exact Component={Contact} />
          <HomeTemplate path ="/news" exact Component={News} />
          <HomeTemplate path ="/gallery" exact Component={Gallery} />
          <HomeTemplate path="/blog" exact Component={Blog} />
          <HomeTemplate path = "/cart" exact Component={Cart} />
          <ComingTemplate path="/coming-soon" exact Component={ComingSoon} />
        </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
