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
                <div className="links">
                    <div className="viewLinks">
                        <Link to={`/subcategories/${this.props.match.params.id}/sublist`}>List</Link> | <Link to={`/subcategories/${this.props.match.params.id}/subthumb`}>Thumbnail</Link> | <Link to={`/subcategories/${this.props.match.params.id}/subgal`}>Gallery</Link>
                    </div>
                    <div className="postLink">
                        <Link to={`/subcategories/${this.props.match.params.id}/post`}>+ Add Post</Link>
                    </div>
                </div>
				<div className="subcategories">
                    {this.props.subcategories.map((subcategory, i) => (
                        <div className="subs" key={`sub-${i}`}>
                            <div>
                                <Link to={`/posts/${subcategory.id}`}>{subcategory.name}</Link> {subcategory.description} <a href={subcategory.image}>Image</a>
                            </div>
                        </div>
                    ))}
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
