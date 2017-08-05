import React, { Component } from 'react';
import Styled from 'styled-components'

const Div = Styled.div`
        font-size: 4vh;
        margin: 25px;
        font-weight: lighter;
        color: white;
        font-family: sans-serif;
`

const Formulario = props => {
    return <form onSubmit={props.handleSubmit}>
        <label>
            <span>Tema:  </span>
            <input type="text" onChange={props.handleChangeTema} />
        </label>
        <input type="submit" value="Enviar" style={button} />
    </form>
}

const button = {
    background: 'none',
    border: 'solid 1px white',
    borderRadius: '3px',
    color: 'white',
    marginLeft: '7px',
    padding: '3px'
}

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tema: '',
            showForm: true
        };
        this.handleChangeTema = this.handleChangeTema.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeTema(event) {
        this.setState({ tema: event.target.value });
        //console.log(event.target.value)
    }

    handleSubmit(event) {
        event.preventDefault();
        let tema = this.state.tema;
        let sig = this.state.significado;
        if (tema === null || tema === "" || tema === undefined) {
            return alert('Preencha os campos');
        } else {
            this.setState({
                tema: tema,
                showForm: false
            });
            console.log('email', JSON.stringify(this.state.tema));
        }
    }

    show() {
        if (this.state.showForm === true) {
            return <Formulario handleChangeTema={this.handleChangeTema} handleSubmit={this.handleSubmit} />
        }
        return <span> Obrigado pela sugestão. </span>
    }

    render() {
        return (
            <Div className='mais'>
                Envie um tema que gostaria de adicionar:<br />
                {this.show()}
            </Div>
        );
    }
}
