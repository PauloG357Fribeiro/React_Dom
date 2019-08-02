import React, { Component } from 'react'
//Component de classe que é usado para ser erdado
//A classe se torna um componente
//props é uma função da biblioteca Component
export default class Saudacao extends Component

//state é para mostrar o que está acontecendo encima .
    {state = {
        tipo : this.props.tipo,
        nome: this.props.nome
    }
    //Para receber os valores digitados.
    setTipo(e){
        this.setState({ tipo: e.target.value })
    }

    setNome(e){
        this.setState({ nome: e.target.value })
    }

    render(){
        const { tipo, nome } = this.props
        return (
            <div>
                <h1>{ tipo }{ nome }</h1>
                <hr />
                <input type= "text" placeholder = "Tipo..." value = {tipo}
                onChange={e => this.setTipo(e)}/>
                <input type= "text" placeholder = "Nome..." value = {nome}
                onChange={e => this.setTipo(e)}/>
            </div>
        )
    }
}