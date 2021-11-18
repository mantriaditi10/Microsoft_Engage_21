const express = require('express');
const mongoose = require('mongoose');

const BlogPost = require('../models/blogPost.js');

const fetchPosts = async (req, res) => {
    try {
        const blogs = await BlogPost.find();
        res.status(200).json(blogs);
    } catch (error) {
        res.status(400).json({ message: error });
    }
}

const createPost = async (req, res) => {
    const post = req.body;
    //console.log(req.body);
    const newBlogPost = new BlogPost({
        ...post,
        creator: req.userId,
        createdAt: new Date().toISOString() 
    });

    try {
        await newBlogPost.save();
        res.status(201).json(newBlogPost);
    } catch (error) {
        console.log(error);
        res.status(409).json({ message: error });
    }
}

const bookmarkPost = async (req, res) => {
    const { id } = req.params;
    const body = req.body;  

    // console.log(id); 
    // console.log(body);

    if(!mongoose.Types.ObjectId.isValid(id)) 
        return res.status(404).send(`No post with id: ${id}`);

    const post = await BlogPost.findById(id);
    
    const index = post.bookmarks.findIndex((id) => id === body.userId);

    if(index === -1) {
        post.bookmarks.push(body.userId);
    }
    const updatedPost = await BlogPost.findByIdAndUpdate(id, post, { new: true });
    res.status(200).json(updatedPost);
}

module.exports.createPost = createPost;
module.exports.fetchPosts = fetchPosts;
module.exports.bookmarkPost = bookmarkPost;