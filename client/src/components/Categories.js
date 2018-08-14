import React, {Component} from 'react'
import {getCategories} from '../actions/listActions'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class Categories extends Component {

	componentDidMount() {
        getCategories(this.props.match.params.id)
    }

	render() {
		return (
			<div>
                <h1>ryanslist | las vegas</h1>
				<div className="categories">
                    {this.props.categories.map((category, i) => (
                        <div className="cats" key={`cat-${i}`}>
                            <div>
                                <Link to={`/posts/${category.id}`}>{category.name} | {category.description} | {category.image}</Link>
                            </div>
                        </div>
                    ))}
                    <div className="addLink">
                        <Link to={`/categories/${this.props.match.params.id}/post`}>Add Post</Link>
                    </div>
                </div>

			</div>
		)
	}
}

Categories.defaultProps = {
    categories:[]
}

function mapStateToProps(appState) {
    return {
        categories:appState.categories
    }
}

export default connect(mapStateToProps)(Categories)
