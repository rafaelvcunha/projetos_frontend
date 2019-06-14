import React, {Component} from 'react';
import api from "../../services/api"

export default class Main extends Component{
    state = {
        viaCep: [],
    };
    
    componentDidMount(){
        this.loadViaCep();
    }

    loadViaCep = async () => {
        const response = await api.get('json');

        this.setState({ viaCep: response.data });

        console.log(response.data);
        
    };

    render(){
        return (
            <div>
                <h2>Endereço Solicitado</h2>
                <p>CEP: { this.state.viaCep.cep} </p>             
                <p>Logradouro: { this.state.viaCep.logradouro}</p>
                <p>Complemento: { this.state.viaCep.complemento}</p>
                <p>Bairro: { this.state.viaCep.bairro}</p>
                <p>Localidade: { this.state.viaCep.localidade}</p>
                <p>Uf: { this.state.viaCep.uf}</p>
            </div>
        )
    }
}