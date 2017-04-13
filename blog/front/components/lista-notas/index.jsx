import React from 'react'
import axios from 'axios';

class ListaNotas extends React.Component {

  constructor() {
    super()
     this.state = {
        notas: []
      }

    this.handleSearch = this.handleSearch.bind(this);
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

handleSearch(event){
  console.log(event.target.value)
  //this.setState({ notas: });
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

         return  <div>
                   <input type="text" onChange={this.handleSearch}  className='form-control' placeholder='Buscar Nota' />
                   <table className='table table-striped'>
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
                 </div>
    }
  }
}

export default ListaNotas
