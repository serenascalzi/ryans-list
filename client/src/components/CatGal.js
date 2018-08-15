import React, {Component} from 'react'
import {getCategories} from '../actions/listActions'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class CatGal extends Component {

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
                <div className="galView">
                    {this.props.categories.map((category, i) => (
                        <div className="gal" key={`cat-${i}`}>
                            <div>
                                <img src={category.image} alt="" /><br /><Link to={`/posts/${category.id}`}>{category.name}</Link><br />{category.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

CatGal.defaultProps = {
    categories:[]
}

function mapStateToProps(appState) {
    return {
        categories:appState.categories
    }
}

export default connect(mapStateToProps)(CatGal)
