import React from 'react'
import axios from 'axios';
import $ from 'jquery'

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    let nota = $("#nota").val()
     axios.post('http://localhost:8000/notas', {
       nota: nota,
     })
     .then(function (response) {
       console.log(response);
     })
     .catch(function (error) {
       console.log(error);
     });
  }

  render() {
    return (
      <div className="container">
        <h1>Registrar Nota</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text" name="nota" className="form-control" id="nota" onChange={this.handleChange} placeholder="Nota" />
          </label>
          <input type="submit" value="Registrar" className="btn btn-info" />
        </form>
      </div>
    );
  }
}

export default PostForm
