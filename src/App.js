
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

function App() {
  return (
    <>
    <Router>
    <Header />
    <Switch>
      <Route path= '/' exact component={HomePage} />
      <Route path= '/pages' exact component={Pages} />
    </Switch>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
