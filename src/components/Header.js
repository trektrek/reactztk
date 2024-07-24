import React from 'react';
import logo from '../assets/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function Header() {
  return (
    <>
      <nav className="navbar bg-dark bg-black navbar-expand-md py-3 fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand me-5" href="/"> <img src={logo} height="80px" alt=""/> </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse navbar-nav-scroll" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#about">Sobre</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#team">Equipe</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">Serviços</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#customers">Clientes</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#cases">Cases</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#blog">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contacts">Contatos</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>

  );
}

export default Header;
