import './App.css';

import React, { Component } from 'react';

class ExempleFormulaire extends Component {

  constructor(props){
    super(props)

    this.state = {
        nom: '',
        prenom: '',
        value:false,
        filiere:'TDI',
        filiere1:'GE',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleOnChange = this.handleOnChange.bind(this)
  }

  handleOnChange(e){
    const name = e.target.name;
    const value = e.target.value;
    const type = e.target.type;

    this.setState({[name]: type==='checkbox'? e.target.checked : value})
  }

  handleSubmit(e){
    e.preventDefault();

    console.log(this.state.nom);
  }
  render() {
    return (
      <div>
          <form onSubmit={this.handleSubmit}>
            <h1>{this.state.nom}</h1>
            Nom : <input type='text' name='nom' value={this.state.nom} onChange={this.handleOnChange}/> <br/>
            Prenom : <input type='text' name='prenom' value={this.state.prenom} onChange={this.handleOnChange}/> <br/>
            Termine : <input type='checkbox' name='value' checked={this.state.value} onChange={this.handleOnChange}/> <br/>
            choisir filiere :
            <input type='radio' name="filiere" value='TDI' checked={this.state.filiere==='TDI'} onChange={this.handleOnChange} /> TDI
            <input type='radio' name="filiere" value='TRI' checked={this.state.filiere==='TRI'} onChange={this.handleOnChange}/> TRI
            <input type='radio' name="filiere" value='INFO' checked={this.state.filiere==='INFO'} onChange={this.handleOnChange}/> INFO
            
        <select name='filiere1'     value={this.state.filiere1} 
    			onChange={this.handleOnChange}>
          <option value="DI">Developpement informatique</option>
          <option value="RI">Reseaux informatique</option>
          <option value="GE">Gestion des entreprise</option>
          <option value="CO">Comptabilite</option>
          <option value="CG">Controle de gestion</option>
        </select>

            <input type='submit' value='Envoyer les donnees' />
          </form>
      </div>
    );
  }
}

function App() {
  return (
    <div>
     <ExempleFormulaire />
    </div>
  );
}

export default App;
