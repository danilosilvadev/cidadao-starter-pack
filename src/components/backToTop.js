import React, { Component } from 'react';
import ScrollEvent from 'react-onscroll';
import jump from 'jump.js'
import Styled from 'styled-components'

const Button = Styled.button`
    position: fixed; /* Fixed/sticky position */
    bottom: 30px; /* Place the button at the bottom of the page */
    right: 30px; /* Place the button 30px from the right */
    z-index: 99; /* Make sure it does not overlap */
    border: none; /* Remove borders */
    outline: none;
    font-size: 3vh;
    background-color: #fcce6a; /* Set a background color */
    color: white; /* Text color */
    cursor: pointer; /* Add a mouse pointer on hover */
    padding: 15px; /* Some padding */
    border-radius: 100px; /* Rounded corners */
`

class BackToTop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showButton: false
        };
        this.handleScrollCallback = this.handleScrollCallback.bind(this);
        this.handleButton = this.handleButton.bind(this);

    }

    handleScrollCallback() {
        console.log("A scroll event occurred!", JSON.stringify(this.state.showButton));
        this.setState({ showButton: true })
    }

    handleButton(event) {
        event.preventDefault();
        jump('.containerHeader');
        setTimeout(() => this.setState({ showButton: false }), 2000);
    }

    render() {
        let button = null;
        if (this.state.showButton === true) {
            button = <div><Button onClick={this.handleButton} type="button">Subir</Button></div>
        }
        return (
            <div>
                <ScrollEvent handleScrollCallback={this.handleScrollCallback} />
                {button}
            </div>
        );
    }
}

export default BackToTop