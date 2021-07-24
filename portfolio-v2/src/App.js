import './App.css'
import Nav from './components/Nav/Nav'
import Header from './components/Header/Header'
import {Route} from 'react-router-dom'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Projects from './components/Projects/Projects'
import Experience from './components/Experience/Experience'
import Experience2 from './components/Experience/Experience2'

function App() {


  return (
    <>
    <Header/>
    <Nav/>
      <Route path="/" exact component={About}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/projects" component={Projects}></Route>
      <Route path="/experience" component={Experience}></Route>
      <Route path="/experience2" component={Experience2}></Route>
    <Footer/>
    </>
  );
}

export default App;
