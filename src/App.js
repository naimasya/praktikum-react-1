import './App.css';
import { Link, Route, Routes} from 'react-router-dom';
import React from 'react';
import Home from './component/Home';
import Bmi from './component/Bmi';
import Bank from './component/Bank';
import Ppn from './component/Ppn';
import Bilangan from './component/Bilangan';

function App() {
  return (
    <div>
    {/* navbar fixed-top navbar-fixed-top navbar-expand-lg navbar-light bg-light shadow-sm py-3  */}
      <nav className="navbar fixed-top navbar-fixed-top navbar-expand-lg navbar-light bg-light py-3 shadow-sm">
              <div className="container-fluid">
                  <a className="navbar-brand fw-bold fs-4 ms-5" href="#">
                      PRAKTIKUM REACT
                  </a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                          <li className="nav-item">
                          </li>
                      </ul>
                      <div className="buttons">
                      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 me-5">
                          <li className="nav-item">
                              <a className="nav-link active" aria-current="page" href="/">Home</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" aria-current="page" href="/Bmi">Bmi</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="/Bank">Bank</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="/Ppn">PPN</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="/Bilangan">Convertion</a>
                          </li>
                          
                      </ul>
                      </div>
                      <Routes>
                        <Route path="/" component={Home} />
                        <Route path="/Bmi" component={Bmi} />
                        <Route path="/Bank" component={Bank} />
                        <Route path="/Ppn" component={Ppn} />
                        <Route path="/Bilangan" component={Bilangan} />
                      </Routes>
                  </div>
              </div>
          </nav>
  </div>
);
}

export default App;