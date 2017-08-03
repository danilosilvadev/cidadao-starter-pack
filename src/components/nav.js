import React, { Component } from 'react';
import Grid from '../assets/grid.css';
import Styled from 'styled-components';

const Li = Styled.li`
            list-style: none;
            font-size: 6vh;
            padding-left: 20px;
            display: inline-grid;
            margin: 15px;
`

const Ul = Styled.ul`

`


const Nav = () => {
    return <div className='containerNav'>
        <Ul>
            <Li>Direta</Li>
            <Li>Esquerda</Li>
            <Li>Centro</Li>
            <Li>Ditadura</Li>
            <Li>LGBT</Li>
            <Li>Comunismo</Li>
            <Li>Racismo</Li>
            <Li>Capitalismo</Li>
            <Li>Feminismo</Li>
            <Li>Ficha Suja</Li>
            <Li>Impeachment</Li>
        </Ul>
    </div>
}

export default Nav