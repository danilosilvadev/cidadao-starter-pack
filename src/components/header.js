import React, { Component } from 'react';
import Menu from './menu'
import Grid from '../assets/grid.css'

const Header = () => {
    return <div className='containerHeader'>
        <h1>O que é...</h1>
        <h1>Cidadão starter pack</h1>
        <Menu />
        <h4>Aprenda em 10 minutos os principais conceitos atuais da política.</h4>
    </div>
}

export default Header