import React, { Component } from 'react';
import Header from './header'
import Content from './content'
import Grid from '../assets/grid.css'

const Container = () => {
    return <div className='container'>
        <Header />
        <Content />
    </div>
}

export default Container