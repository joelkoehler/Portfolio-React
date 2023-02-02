import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './Landing';
import Music from './Music';


function App() {
  return (
    <div className="App">

      <Router>
        <a className='home' href='/'>
          <div className='home-text'>J.K.</div>
        </a>
        <div className='nav row-reverse'>
          <a href="/music" className='nav-item'>MUSIC</a>
          <a href="/" className='nav-item'>CODING</a>
        </div>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/music' element={<Music />} />

        </Routes>
        <footer className='footer'>
          <div className='col-center'>
            <p className='no-margin'>thanks for stopping by :-)</p>
          </div>
        </footer>
      </Router>





    </div>
  );
}

export default App;
