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
      let nota = res.data.notas

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
    if (this.state.notas == "") {

    return (
        <p>error en render</p>
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
