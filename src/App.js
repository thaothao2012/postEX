import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import {Redirect} from 'react-router';
import Posts from './components/posts';
import NewPost from './components/new-post';
import './App.css';

class App extends Component{
  render(){
    return(
      <Router>
      <div>   
        <div> 
          <p className="header">
            <Link to="/posts">Home</Link>
            <Link to="/new-post">New Post</Link>
          </p>
        </div>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/posts" />}/>
          <Route path="/posts" component={Posts}/>
          <Route path="/new-post" component={NewPost}/>
        </Switch>
      </div>
      </Router>
    );
  }
}
export default App;