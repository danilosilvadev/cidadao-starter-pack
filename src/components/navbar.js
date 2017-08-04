import React, { Component } from 'react';
import Grid from '../assets/grid.css';
import Styled from 'styled-components';
import Container from './container'
import jump from 'jump.js'


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
            margin-bothrefm: 15px;
            font-weight: lighter;
            opacity: 0.7;
`

const smoothScrollTo = props => {
    switch (props.href) {
        case "#impeachment":
            return jump('.impeachment');
        default:
            return jump('.direita');
    }
}

const Navbar = () => {
    return <nav className='containerNav'>
        <H1>O que é...</H1>
        <ul>
            <a href="#direita" id='direita'><Li>Direta</Li></a>
            <a href="#esquerda"><Li>Esquerda</Li></a>
            <a href="#centro"><Li>Centro</Li></a>
            <a href="#ditadura"><Li>Ditadura</Li></a>
            <a href="#lgbt" id='lgbt'><Li>LGBT</Li></a>
            <a href="#comunismo"><Li>Comunismo</Li></a>
            <a href="#racismo"><Li>Racismo</Li></a>
            <a href="#capitalismo"><Li>Capitalismo</Li></a>
            <a href="#feminismo"><Li>Feminismo</Li></a>
            <a href="#ficha-suja"><Li>Ficha Suja</Li></a>
            <a href="#impeachment" onClick={smoothScrollTo}><Li>Impeachment</Li></a>
        </ul>
    </nav>
}

export default Navbar