import React, {Component} from 'react';
import InputMask from 'react-input-mask';

export default class Main extends Component{
    render(){
        return(
        <div>
            <input placeholder="CEP" type="text"></input>
            {/* <InputMask mask="99999-999" maskChar={null} value={this.state.value} onChange={this.onChange} beforeMaskedValueChange={this.beforeMaskedValueChange} /> --> */}
            <button >Pesquisar</button>
        </div>
        )
    }
}