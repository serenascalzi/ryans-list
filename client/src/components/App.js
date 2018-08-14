import React, {Component} from 'react'
import '../styles/App.css'
import {Provider} from 'react-redux'
import store from '../store'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Main from './Main'
import Categories from './Categories'
import Subcategories from './Subcategories'
import Posts from './Posts'
import Post from './Post'

class App extends Component {
  
  render() {
    return (
    	<Provider store={store}>
    		<Router>
    			<div>
    				<Switch>
    					<Route exact path="/" component={Main} />
    					<Route exact path="/categories/:id" component={Categories} />
    					<Route exact path="/subcategories/:id" component={Subcategories} />
                        <Route path="/categories/:id/post" component={Post} />
                        <Route path="/subcategories/:id/post" component={Post} />
                        <Route path="/posts/:id" component={Posts} />
    				</Switch>
    			</div>
    		</Router>
    	</Provider>
    )
  }
}

export default App
