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
    return <section className='containerContent' id='main'>
            <article className='direita'>
                <H2>Direta</H2>
                <span>Some text whatever etc</span>
            </article>
            <article className='esquerda'>
                <H2>Direta</H2>
                <span>Some text whatever etc</span>
            </article>
            <article className='centro'>
                <H2>Direta</H2>
                <span>Some text whatever etc</span>
            </article>
            <article className='ditadura'>
                <H2>Direta</H2>
                <span>Some text whatever etc</span>
            </article>
            <article className='lgbt'>
                <H2>Direta</H2>
                <span>Some text whatever etc</span>
            </article>
            <article className='comunismo'>
                <H2>Direta</H2>
                <span>Some text whatever etc</span>
            </article>
            <article className='racismo'>
                <H2>Direta</H2>
                <span>Some text whatever etc</span>
            </article>
            <article className='capitalismo'>
                <H2>Direta</H2>
                <span>Some text whatever etc</span>
            </article>
            <article className='feminismo'>
                <H2>Direta</H2>
                <span>Some text whatever etc</span>
            </article>
            <article className='ficha-suja'>
                <H2>Direta</H2>
                <span>Some text whatever etc</span>
            </article>
            <article className='impeachment'>
                <H2>Direta</H2>
                <span>Some text whatever etc</span>
            </article>
    </section>
}

export default Content