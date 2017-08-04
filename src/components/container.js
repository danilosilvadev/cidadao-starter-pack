import React, { Component } from 'react';
import Header from './header'
import Content from './content'
import Footer from './footer'
import Grid from '../assets/grid.css'

const Container = () => {
    return <div className='container'>
        <Header />
        <Content />
        <Footer />
    </div>
}

export default Container