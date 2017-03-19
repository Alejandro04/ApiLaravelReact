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

        let x = this.state.notas.length
        console.log(x)
        for(let i = 0; i < x; i++)
        {
            return (
                <ul>
                  <li>{ this.state.notas[i].nota }</li>
                </ul>
            )
        }
    }
  }
}

export default ListaNotas
