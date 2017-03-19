import React from 'react'
import axios from 'axios';
import $ from 'jquery';

class ListaNotas extends React.Component {

  constructor() {
    super()
     this.state = {
        notas: []
      }
  }

  componentWillMount() {


  $.ajax({
      url: 'http://localhost:8000/notas',
      dataType: 'json',
      type: 'GET',
      success: function(data) {
        this.setState({notas: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error('error');
      }.bind(this)
   });

/*

  axios.get('http://localhost:8000/notas')
  .then(function (response) {
      const notas = response.data.notas
      this.setState({notas: notas});
  })
  .catch(function (error) {
    console.log(error);
  });

  */


  /*
    fetch('http://localhost:8000/notas')
      .then((response) => {
        return response.json()
      })
      .then((notas) => {
       if(notas != null)
       {
          this.setState({notas: notas})
       }
      })
        */

  }


  render() {
    console.log(this.state.notas); //Se trae el estado inicial (por eso rebota) y luego el estado actualizado
    if (this.state.notas.length > 0) {
      return (
        <div className="container-fluid">
          <ListaNotas listado={this.state.notas} />
        </div>
      )
    } else {
      return <p className="text-center">Cargando notas...</p>
    }
  }
}

export default ListaNotas
