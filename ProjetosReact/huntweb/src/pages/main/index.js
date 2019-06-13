import React, {Component} from 'react';
import api from "../../services/api"

export default class Main extends Component{
    state = {
        cep: []
    };
    
    componentDidMount(){
        this.loadCep();
    }

    loadCep = async () => {
        const response = await api.get('/');

        console.log(response.data);
        
    };

    render(){
        return (
            <h1>{this.state.cep.map(home => <div>{home.logradouro}</div>)}</h1>
        );
    }
}