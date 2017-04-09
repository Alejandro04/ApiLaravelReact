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
          <tr key={i}>
            <td>{Item.nota}</td>
            <td><a href={"/nota/"+ Item.id} className='btn btn-info'>Editar</a></td>
          </tr>
          );

         return <table className='table table-striped'>
                 <thead>
                    <tr>
                      <th>Nota</th>
                      <th>Accion</th>
                    </tr>
                  </thead>
                 <tbody>
                    {Items}
                  </tbody>
                 </table>
    }
  }
}

export default ListaNotas
