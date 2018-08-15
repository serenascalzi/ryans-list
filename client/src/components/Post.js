import React, {Component} from 'react'
import {addPost} from '../actions/listActions'

class Post extends Component {

    state = {
        name:'',
        description:'',
        image:''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        addPost({
            name:this.state.name,
            description:this.state.description,
            image:this.state.image,
            category_id:this.props.match.params.id
        })
        this.setState({
            name:'',
            description:'',
            image:''
        })
    }

	render() {
		return (
			<div>
                <div className="post">
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="name">Post Name</label><br />
                        <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange} /><br />
                        <label htmlFor="description">Post Description</label><br />
                        <input type="text" id="description" name="description" value={this.state.description} onChange={this.handleChange} /><br />
                        <label htmlFor="image">Post Image</label><br />
                        <input type="text" id="image" name="image" value={this.state.image} onChange={this.handleChange} /><br />
                        <button type="submit" onSubmit={this.handleSubmit}>SUBMIT</button>
                    </form>
                </div>
			</div>
		)
	}
}

export default Post
