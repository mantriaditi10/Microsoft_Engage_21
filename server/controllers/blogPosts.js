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

module.exports.createPost = createPost;
module.exports.fetchPosts = fetchPosts;