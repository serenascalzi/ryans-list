import React, {Component} from 'react'
import {getCategories} from '../actions/listActions'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class CatList extends Component {

    componentDidMount() {
        getCategories(this.props.match.params.id)
    }

    render() {
        return (
            <div>
                <div className="links">
                    <div className="viewLinks">
                        <Link to={`/categories/${this.props.match.params.id}/catlist`}>List</Link> | <Link to={`/categories/${this.props.match.params.id}/catthumb`}>Thumbnail</Link> | <Link to={`/categories/${this.props.match.params.id}/catgal`}>Gallery</Link>
                    </div>
                    <div className="postLink">
                        <Link to={`/categories/${this.props.match.params.id}/post`}>+ Add Post</Link>
                    </div>
                </div>
                <div className="listView">
                    {this.props.categories.map((category, i) => (
                        <div className="list" key={`cat-${i}`}>
                            <div>
                                <Link to={`/posts/${category.id}`}>{category.name}</Link> {category.description} <a href={category.image}>Image</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

CatList.defaultProps = {
    categories:[]
}

function mapStateToProps(appState) {
    return {
        categories:appState.categories
    }
}

export default connect(mapStateToProps)(CatList)
