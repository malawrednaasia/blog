import React, {Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import styles from './Blog.css'
import FullPost from '../../components/FullPost/FullPost';

class Blog extends Component {
     state = {
         posts: [],
         selectedPostId: 1,
         error: false
    }
    componentDidMount () {
        axios.get('https://blog-925db.firebaseio.com/posts.json')
            .then(response => {
                const posts = response.data;
                this.setState({posts: posts});

            })
            .catch(error => {
                this.setState({error: true})
            });
    }
    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
    }
    render() {
         let posts = <p>Something went wrong!</p>;
         if (!this.state.error && this.state.posts.length !== 0){
             console.log(this.state.posts);
             posts = this.state.posts.map(post => {
                 return <Post
                     key={post.id}
                     title={post.title}
                     author={post.userId}
                     clicked={() => this.postSelectedHandler(post.id)}
                 />
             });
         }

        return (
            <div>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section className={styles.Posts}>
                    {posts}
                </section>            
            </div>

        );
    }
}

export default Blog;