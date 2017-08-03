import React, { Component } from 'react';
import Nav from './nav'
import Grid from '../assets/grid.css'

const Header = () => {
    return <div className='containerHeader'>
        <h1>O que é...</h1>
        <Nav />
        <h1>Aprenda em 10 minutos os principais conceitos atuais da política.</h1>
    </div>
}

export default Header