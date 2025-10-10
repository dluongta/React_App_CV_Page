import './App.css';
import { Header } from './components/home/header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { HomePage } from './components/pageComponent/HomePage';
import { Footer } from './components/home/Footer';
import { Pages } from './components/pages/Pages';
import { Portfolio } from './components/pages/Portfolio';
import { Blog } from './components/pages/Blog';
import { Contact } from './components/pages/Contact';
import ScrollToTopButton from './components/button/ScrollToTopButton';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/pages' exact component={Pages} />
          <Route path='/portfolio' exact component={Portfolio} />
          <Route path='/blog' exact component={Blog} />
          <Route path='/contact' exact component={Contact} />
        </Switch>
        <Footer />
        <ScrollToTopButton />
      </Router>
    </>
  );
}

export default App;
