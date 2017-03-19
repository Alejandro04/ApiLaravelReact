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

  componentDidMount() {
  axios.get('http://localhost:8000/notas')
    .then(res => {
      // Transform the raw data by extracting the nested posts
      const nota = res.data.notas[0].nota
      console.log(res.data.notas)

      this.setState({
        notas:nota
      });
    })
    .catch(err => {
      console.log(err)
      this.setState({
        notas: 'error'
      });
    });
}

  render() {
  //  console.log(this.state.notas); //Se trae el estado inicial (por eso rebota) y luego el estado actualizado
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
