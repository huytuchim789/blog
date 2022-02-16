import { PostModel } from '../models/PostModels.js';

export const getPosts = async (req, res) => {
  try {
    const posts = await PostModel.find();
    console.log('posts', posts);
    res.status(200).json(posts);
  } catch (e) {
    res.status(500).json({ error: err });
  }
};
export const createPost = async (req, res) => {
  const newPost = req.body;
  const post = new PostModel(newPost);
  await post.save();
  res.status(500).json({ error: err });
};
export const updatePost = async (req, res) => {
  const newPost = req.body;
  const post = await PostModel.findOneAndUpdate(
    { _id: updatePost._id },
    updatePost,
    { new: true }
  );
  await post.save();
  res.status(500).json({ error: err });
};
