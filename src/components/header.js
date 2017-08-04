import React, { Component } from 'react';
import Navbar from './navbar'
import Grid from '../assets/grid.css'
import Styled from 'styled-components';

const H3 = Styled.h3`
        text-align: center;
        font-size: 4vh;
        margin: 25px;
        font-weight: lighter;
`

const Header = () => {
    return <div className='containerHeader'>
        <Navbar />
        <H3>Aprenda em 10 minutos "resumidamente" os principais conceitos atuais na política.</H3>
    </div>
}

export default Header