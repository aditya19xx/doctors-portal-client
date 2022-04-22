import { render } from "@testing-library/react";
import React , {useState, useEffect}from "react";

class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            posts: [],
        };
    }

   useEffect(()=>{
    const fetchPosts = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const postsData = await response.json();
        this.setState({posts: postsData});
    };
    fetchPosts();
   }, []);

    render(){
        return (
            <div>
                {posts.map((post) => (
                   <div>
                       <span>{post.title}</span>
                       <span>{post.body}</span>
                   </div> 
                ))}
            </div>
        );
    };
}