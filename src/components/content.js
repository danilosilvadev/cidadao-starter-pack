import React, { Component } from 'react';
import Grid from '../assets/grid.css';
import Styled from 'styled-components';

const H2 = Styled.h2`
            color: #fcc36b;
            font-weight: lighter;
            font-size: 6vh;
            margin-bottom: 10px;
            margin-top: 10px;

`

const Ul = Styled.ul`
            list-style-type: none;
`

const Content = () => {
    return <div className='containerContent'>
        <Ul>
            <li className='direita'>
                <H2>Direta</H2>
                <span>Some text whatever etc</span>
            </li>
            <li>
                <H2>Direta</H2>
                <span>Some text whatever etc</span>
            </li>
            <li>
                <H2>Direta</H2>
                <span>Some text whatever etc</span>
            </li>
            <li>
                <H2>Direta</H2>
                <span>Some text whatever etc</span>
            </li>
            <li>
                <H2>Direta</H2>
                <span>Some text whatever etc</span>
            </li>
            <li>
                <H2>Direta</H2>
                <span>Some text whatever etc</span>
            </li>
            <li>
                <H2>Direta</H2>
                <span>Some text whatever etc</span>
            </li>
            <li>
                <H2>Direta</H2>
                <span>Some text whatever etc</span>
            </li>
            <li>
                <H2>Direta</H2>
                <span>Some text whatever etc</span>
            </li>
            <li>
                <H2>Direta</H2>
                <span>Some text whatever etc</span>
            </li>
            <li className='impeachment'>
                <H2>Direta</H2>
                <span>Some text whatever etc</span>
            </li>
        </Ul>
    </div>
}

export default Content