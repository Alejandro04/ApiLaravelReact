// Root.js

import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import PostForm from '../components/forms/post.jsx'
import ListaNotas from '../components/lista-notas/index.jsx'


class Root extends Component {

  render() {
    return (
      <Router>
        <Route path='/notas' component={ListaNotas}>
        <Route path='/form' component={PostForm} />
        </Route>
      </Router>
    );
  }
}

export default Root;
