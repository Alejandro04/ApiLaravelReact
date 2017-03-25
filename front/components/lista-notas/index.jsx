import React from 'react'
import axios from 'axios';

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
      let nota = res.data.notas

      this.setState({
        notas:nota
      });
    })
    .catch(err => {
      console.log(err)
    });
}

  render() {
    if (this.state.notas == "") {

    return (
        <p>error</p>
    )

    } else {

        let Items = this.state.notas.map((Item, i) =>
          <li key={i}>
            {Item.nota}
          </li>
          );

         return <div><ul>{Items}</ul></div>
    }
  }
}

export default ListaNotas
