import React, {Component} from 'react'
import {getSubcategories} from '../actions/listActions'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class Subcategories extends Component {

	componentDidMount() {
        getSubcategories(this.props.match.params.id)
    }

	render() {
		return (
			<div>
                <h1>ryanslist | las vegas</h1>
				<div className="subcategories">
                    {this.props.subcategories.map((subcategory, i) => (
                        <div className="subs" key={`sub-${i}`}>
                            <div>
                                <Link to={`/posts/${subcategory.id}`}>{subcategory.name} | {subcategory.description} | {subcategory.image}</Link>
                            </div>
                        </div>
                    ))}
                    <div className="addLink">
                        <Link to={`/subcategories/${this.props.match.params.id}/post`}>Add Post</Link>
                    </div>
                </div>
			</div>
		)
	}
}

Subcategories.defaultProps = {
    subcategories:[]
}

function mapStateToProps(appState) {
    return {
        subcategories:appState.subcategories
    }
}

export default connect(mapStateToProps)(Subcategories)
