import React, {Component} from 'react'
import {getSubcategories} from '../actions/listActions'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class SubThumb extends Component {

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
				<div className="thumbView">
                    {this.props.subcategories.map((subcategory, i) => (
                        <div className="thumb" key={`sub-${i}`}>
                            <div>
                                <img src={subcategory.image} alt="" /> <Link to={`/posts/${subcategory.id}`}>{subcategory.name}</Link> {subcategory.description}
                            </div>
                        </div>
                    ))}
                </div>
			</div>
		)
	}
}

SubThumb.defaultProps = {
    subcategories:[]
}

function mapStateToProps(appState) {
    return {
        subcategories:appState.subcategories
    }
}

export default connect(mapStateToProps)(SubThumb)
