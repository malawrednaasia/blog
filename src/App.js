import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.css';
import Blog from './containers/Blog/Blog';
import NewPost from './containers/NewPost/NewPost';
import Toolbar from './components/Navigation/Toolbar/Toolbar';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Toolbar/>
            <Switch>
              <Route path="/new-post" component={NewPost} />
              <Route path="/" exact component={Blog} />

            </Switch>
</div>
      </BrowserRouter>
    );
  }
}

export default App;
