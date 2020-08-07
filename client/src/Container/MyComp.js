import React, { Component } from 'react'
import Post from '../Component/Post'
import axios from 'axios'

class MyComp extends Component {

    state = {
        results: []
    }

    componentDidMount() {
        axios.get('http://localhost:4000/members').then((res) => this.setState({ results: res.data }))
    }

    render() {
        const posts = this.state.results.map((post) => {
            return (
                <div>
                    <Post key={post.id} name={post.real_name}
                        id={post.id} />
                    <br />
                </div>
            )
        })
        return (
            <div>
                {posts}
            </div>
        )
    }

}

export default MyComp