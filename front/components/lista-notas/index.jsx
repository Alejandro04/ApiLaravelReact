import React from 'react'

class ListaNotas extends React.Component {

  constructor() {
    super()
    this.state = { notas: [] }
  }

  componentWillMount() {
    fetch('http://localhost:8000/notas')
      .then((response) => {
        return response.json()
      })
      .then((notas) => {
        this.setState({notas: notas})
      })
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
