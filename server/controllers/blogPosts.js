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

const fetchPost = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)){
      return res.status(404).json({error: `No post with id: ${id}`});
    }
    const post = await BlogPost.findById(id);
    res.status(200).json(post);
  } catch (error) {
    console.log(error);
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

const bookmarkPost = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);
  const post = await BlogPost.findById(id);
  const index = post.bookmarks.findIndex((id) => id === body.userId);
  if (index === -1) {
    post.bookmarks.push(body.userId);
  }
  const updatedPost = await BlogPost.findByIdAndUpdate(id, post, { new: true });
  res.status(200).json(updatedPost);
}

const likePost = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);
  const post = await BlogPost.findById(id);
  const index = post.likes.findIndex((id) => id === body.userId);
  if (index === -1) {
    post.likes.push(body.userId);
  }
  const updatedPost = await BlogPost.findByIdAndUpdate(id, post, { new: true });
  res.status(200).json(updatedPost);
}

const commentPost = async (req, res) => {
  const { id } = req.params;
  const { comment } = req.body;
  const post = await BlogPost.findById(id);
  post.comments.push(comment);
  const updatedPost = await BlogPost.findByIdAndUpdate(id, post, { new: true });
  res.json(updatedPost);
}

module.exports.createPost = createPost;
module.exports.fetchPosts = fetchPosts;
module.exports.fetchPost = fetchPost;
module.exports.bookmarkPost = bookmarkPost;
module.exports.likePost = likePost;
module.exports.commentPost = commentPost;