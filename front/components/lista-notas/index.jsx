import React from 'react'

class ListaNotas extends React.Component {

  constructor(props) {
    super(props)
    this.state = { notas: [] }
  }

  componentWillMount() {
    fetch('/notas')
      .then((response) => {
        return response.json()
      })
      .then((notas) => {
        this.setState({ notas: notas })
      })
  }

  render() {
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
