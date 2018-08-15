import React, {Component} from 'react'
import {getCategories} from '../actions/listActions'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class CatThumb extends Component {

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
                <div className="thumbView">
                    {this.props.categories.map((category, i) => (
                        <div className="thumb" key={`cat-${i}`}>
                            <div>
                                <img src={category.image} alt="" /> <Link to={`/posts/${category.id}`}>{category.name}</Link> {category.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

CatThumb.defaultProps = {
    categories:[]
}

function mapStateToProps(appState) {
    return {
        categories:appState.categories
    }
}

export default connect(mapStateToProps)(CatThumb)
