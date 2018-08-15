import React, {Component} from 'react'
import '../styles/App.css'
import {Provider} from 'react-redux'
import store from '../store'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Main from './Main'
import Categories from './Categories'
import Subcategories from './Subcategories'
import CatList from './CatList'
import CatThumb from './CatThumb'
import CatGal from './CatGal'
import SubList from './SubList'
import SubThumb from './SubThumb'
import SubGal from './SubGal'
import Posts from './Posts'
import Post from './Post'

class App extends Component {
  
  render() {
    return (
    	<Provider store={store}>
    		<Router>
    			<div>
                    <h1><Link to={"/"}>ryanslist | las vegas</Link></h1>
        				<Switch>
        					<Route exact path="/" component={Main} />
        					<Route exact path="/categories/:id" component={Categories} />
        					<Route exact path="/subcategories/:id" component={Subcategories} />
                            <Route path="/categories/:id/CatList" component={CatList} />
                            <Route path="/categories/:id/CatThumb" component={CatThumb} />
                            <Route path="/categories/:id/CatGal" component={CatGal} />
                            <Route path="/categories/:id/post" component={Post} />
                            <Route path="/subcategories/:id/SubList" component={SubList} />
                            <Route path="/subcategories/:id/SubThumb" component={SubThumb} />
                            <Route path="/subcategories/:id/SubGal" component={SubGal} />
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
