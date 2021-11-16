const express = require('express');
const mongoose = require('mongoose');

const BlogPost = require('../models/blogPost.js');

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