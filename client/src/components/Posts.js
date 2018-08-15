import React, {Component} from 'react'
import {getPosts} from '../actions/listActions'
import {connect} from 'react-redux'

class Posts extends Component {

	componentDidMount() {
        getPosts(this.props.match.params.id)
    }

	render() {
		return (
			<div>
				<div className="posts">
                    {this.props.posts.map((post, i) => (
                        <div className="psts" key={`pst-${i}`}>
                            <div>
                                <p>{post.name}</p>
                                <p>{post.description}</p>
                                <img src={post.image} alt=""/>
                            </div>
                        </div>
                    ))}
                </div>
			</div>
		)
	}
}

Posts.defaultProps = {
    posts:[]
}

function mapStateToProps(appState) {
    return {
        posts:appState.posts
    }
}

export default connect(mapStateToProps)(Posts)
