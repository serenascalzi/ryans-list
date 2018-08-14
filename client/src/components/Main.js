import React, {Component} from 'react'
import {getAll} from '../actions/listActions'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class Main extends Component {

	componentDidMount() {
        getAll(this.props.match.params.id)
    }

    render() {
    	return (
    		<div>
    			<h1>ryanslist | las vegas</h1>
                <div className="main">
                    {this.props.all.map((each, i) => (
                        <div key={`cat-${i}`}>
                            <div className="maincats">
                                <Link to={`/categories/${each.id}`}>{each.category}</Link>
                            </div>
                                {each.sub.map((sub, i) => (
                                    <div className="mainsubs" key={`sub-${i}`}>
                                        <Link to={`/subcategories/${sub.id}`}>{sub.category}</Link>
                                    </div>
                                ))}
                        </div>
                    ))}
                </div>
            </div>
    	)
    }
}

Main.defaultProps = {
    all:[]
}

function mapStateToProps(appState) {
    return {
        all:appState.all
    }
}

export default connect(mapStateToProps)(Main)
