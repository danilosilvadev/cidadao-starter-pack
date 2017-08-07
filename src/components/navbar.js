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

const A = Styled.a`
            text-decoration: none;
`

const smoothScrollTo = value => {
    switch (value) {
        case 'direita':
            return jump('.direita');
        case 'esquerda':
            return jump('.esquerda');
        case 'centro':
            return jump('.centro');
        case 'ditadura':
            return jump('.ditadura');
        case 'lgbt':
            return jump('.lgbt');
        case 'comunismo':
            return jump('.comunismo');
        case 'racismo':
            return jump('.racismo');
        case 'capitalismo':
            return jump('.capitalismo');
        case 'feminismo':
            return jump('.feminismo');
        case 'ficha-suja':
            return jump('.ficha-suja');
        case 'impeachment':
            return jump('.impeachment');
        default:
            jump('.mais');
    }
}

const Navbar = () => {
    return <nav className='containerNav'>
        <H1>O que é...</H1>
        <ul>
            <A href="#direita" onClick={() => smoothScrollTo('direita')}><Li>Direta</Li></A>
            <A href="#esquerda" onClick={() => smoothScrollTo('esquerda')}><Li>Esquerda</Li></A>
            <A href="#centro" onClick={() => smoothScrollTo('centro')}><Li>Centro</Li></A>
            <A href="#ditadura" onClick={() => smoothScrollTo('ditadura')}><Li>Ditadura</Li></A>
            <A href="#lgbt" onClick={() => smoothScrollTo('lgbt')}><Li>LGBT</Li></A>
            <A href="#comunismo" onClick={() => smoothScrollTo('comunismo')}><Li>Comunismo</Li></A>
            <A href="#racismo" onClick={() => smoothScrollTo('racismo')}><Li>Racismo</Li></A>
            <A href="#capitalismo" onClick={() => smoothScrollTo('capitalismo')}><Li>Capitalismo</Li></A>
            <A href="#feminismo" onClick={() => smoothScrollTo('feminismo')}><Li>Feminismo</Li></A>
            <A href="#ficha-suja" onClick={() => smoothScrollTo('ficha-suja')} > <Li>Ficha limpa</Li></A>
            <A href="#impeachment" onClick={() => smoothScrollTo('impeachment')}><Li>Impeachment</Li></A>
            <A href="#mais" onClick={() => smoothScrollTo('mais')}><Li>Mais...</Li></A>
        </ul>
    </nav>
}

export default Navbar