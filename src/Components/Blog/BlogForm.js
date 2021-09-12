import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './BlogForm.css'

export default function BlogForm() {
    let comments = useSelector(state => state.CommentReducer.comments);
    let [userComment,setUserComment] = useState({
        name: '',
        email: '',
        content: '',
        avatar: '',
    });
    let dispatch = useDispatch();
    const handleChange = (e) => {
        let {value,name} = e.target;
        setUserComment({
            ...userComment,
            [name]:value,
        })
    }

    const handleComment = (e) => {
        e.preventDefault();
        let newUserComment = {...userComment,avatar:`https://i.pravatar.cc/150?u=${userComment.name}`}
        dispatch({
            type: 'ADD_COMMENT',
            userComment: newUserComment
        })
    }
    return (
        <div className="blog-form">
            <h4 className="my-lg-5 my-2 text-white">Leave A Review</h4>
            <form onSubmit={handleComment}>
            <div className="row">
                <div className="col-6">
                    <input type="text" name="name" placeholder="Name" onChange={handleChange} required/>
                </div>
                <div className="col-6">
                    <input  type="email" name="email" placeholder="Email" onChange={handleChange} required />
                </div>
                <div className="col-12 mt-4">
                    <textarea type="text" name="content" cols="40" rows="3" placeholder="Your Comment" onChange={handleChange} required></textarea>
                </div>
            </div>
                <button className="add-comment-btn mt-lg-5 mt-2">Add Comment</button>
            </form>
        </div>
    )
}
