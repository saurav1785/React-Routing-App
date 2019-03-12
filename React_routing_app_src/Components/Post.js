import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {
        state={
            post: [ ]
        }
        componentDidMount(){
            console.log(this.props);
            let id = this.props.match.params.post_id;
            axios.get('https://jsonplaceholder.typicode.com/posts/' + id).then(res =>{
             this.setState({
                 post: res.data
             })
//                console.log(this.state);
            })
        }
    
    render() {
        const post = this.state.post ? (
            <div className='post card'>
                <div className='center card-title'>{this.state.post.title} </div>
             <img className="image1" src="https://gallery.kissclipart.com/20180905/oiw/kissclipart-profile-picture-game-of-thrones-clipart-tyrion-lan-469343f5348c7336.jpg" alt="oops! not found!" />
                <p>{this.state.post.body}</p>
            </div>
        ) : ( <p> Loading posts.........</p> )
             
        return(
            <div className='container'>
                {post}
            </div>
        )
    }
}

export default Post;