import React, { Component } from 'react';
import Grid from '../assets/grid.css';
import Styled from 'styled-components';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import Container from './container'

const Li = Styled.li`
            list-style: none;
            font-size: 4vh;
            padding: 20px;
            display: inline-grid;
            margin: 5px;
            border: 2px solid white;
            border-radius: 10px;
            color: white;
`

const H1 = Styled.h1`
            font-size: 7vh;
            font-family: sans-serif;
            margin-bottom: 15px;
            font-weight: lighter;
            opacity: 0.7;
`

const direita = () => { return window.location = "#direita"; }

const Navbar = () => {
    return <Router>
        <nav className='containerNav'>
            <H1>O que é...</H1>

            <ul>
                <Link to="/direita"><Li>Direta</Li></Link>
                <Link to="/esquerda"><Li>Esquerda</Li></Link>
                <Link to="/centro"><Li>Centro</Li></Link>
                <Link to="/ditadura"><Li>Ditadura</Li></Link>
                <Link to="/lgbt"><Li>LGBT</Li></Link>
                <Link to="/comunismo"><Li>Comunismo</Li></Link>
                <Link to="/racismo"><Li>Racismo</Li></Link>
                <Link to="/capitalismo"><Li>Capitalismo</Li></Link>
                <Link to="/feminismo"><Li>Feminismo</Li></Link>
                <Link to="/ficha-suja"><Li>Ficha Suja</Li></Link>
                <Link to="/impeachment"><Li>Impeachment</Li></Link>
            </ul>
            <Route exact path="/" component={Home} />
            <Route path="/direita" component={Direita} />
            <Route path="/esquerda" component={Esquerda} />
            <Route path="/centro" component={Centro} />
            <Route path="/ditadura" component={Ditadura} />
            <Route path="/lgbt" component={Lgbt} />
            <Route path="/comunismo" component={Comunismo} />
            <Route path="/capitalismo" component={Capitalismo} />
            <Route path="/feminismo" component={Feminismo} />
            <Route path="/ficha-suja" component={FichaSuja} />
            <Route path="/impeachment" component={Impeachment} />

        </nav>
    </Router>
}

export default Navbar