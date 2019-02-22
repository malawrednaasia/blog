import React, { Component } from 'react';
import axios from 'axios';

import styles from './NewPost.css';
import Input from '../../components/UI/Input/Input'


class NewPost extends Component {
    state = {
        postForm: {
            title: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    label: 'Title'
                },
                value: ''
            },
            body: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    label: 'Content'
                },
                value: ''
            },
            author: {
                elementType: 'select',
                elementConfig: {
                    label: "Author",
                    options: [
                        { value: 'Asia', displayValue: 'Asia' },
                        { value: 'Kasia', displayValue: 'Kasia' },
                        { value: 'Stasia', displayValue: 'Stasia' },
                    ]
                },
                value: ''
            },
            id: {
                elementType: 'input',
                elementConfig: '',
                value: ''
            },
        }

    }
    postDataHandler = (event) => {
        event.preventDefault();
        const formData = {};
        for (let formElementIdentifier in this.state.postForm) {
            formData[formElementIdentifier] = this.state.postForm[formElementIdentifier].value;
        }
        formData.append('name', 11);
        axios.post('https://blog-925db.firebaseio.com/posts.json', formData)
            .then(response => {
                console.log(response.data);
                this.setState({ loading: false });
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({ loading: false });
            });
    }
    inputChangedHandler = (event, inputIdentifier) => {
        const updatedPostForm = {
            ...this.state.postForm
        };
        const updatedFormElement = {
            ...updatedPostForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedPostForm[inputIdentifier] = updatedFormElement;
        this.setState({postForm: updatedPostForm})
    }
    render() {
        const formElementsArray = [];
        for (let key in this.state.postForm) {
            formElementsArray.push({
                id: key,
                config: this.state.postForm[key]
            });
        }
        return (
            <div>
                <form className={styles.NewPost} onSubmit={this.postDataHandler}>
                    <h1>Add new Post</h1>
                    {formElementsArray.map(formElement => (
                        <Input
                            key={formElement.id}
                            elementType={formElement.config.elementType}
                            elementConfig={formElement.config.elementConfig}
                            value={formElement.config.value}
                            changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                    ))}


                    <button onClick={this.postDataHandler}>Add Post</button>
                </form>
            </div>

        );
    }
}

export default NewPost;