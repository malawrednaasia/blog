import React, { Component } from 'react';
import axios from 'axios';

import styles from './FullPost.css'

class FullPost extends Component {
    state = {
        loadedPost: null
    }

    componentDidUpdate() {
        if (this.props.id){
            if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id!== this.props.id) )
            //|| (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)
                // Gdy brak wybranego postu, lub gdy wybarny post jest inny niz wczytany
            {
                axios.get('https://blog-925db.firebaseio.com/posts/' + (this.props.id-1) + '.json' )
                    .then(response => {
                        this.setState({ loadedPost: response.data})
                    });
            }
        }
    }
    deleteHandler = () => {
        axios.delete('https://blog-925db.firebaseio.com/posts/' + this.props.id +'.json')
            .then(response => {
                console.log(response)
            })

    }
    render() {
        let post = <p style={{ textAlign: 'center', marginTop: '100px'}} >Please select a Post!</p>
        if (this.props.id){
            post= <p style={{textAlign: 'center', marginTop: '100px'}} > Loading...</p>;
        }
        if (this.state.loadedPost){
            post = (
                <div className={styles.FullPost}>
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body} </p>
                    <p>Author: {this.state.loadedPost.userId}</p>
                    <div className={styles.Edit}>
                        <button onClick={this.deleteHandler} className="Delete">Delete</button>
                    </div>
                </div>
            );
        }
        return post;
    }
}

export default FullPost;