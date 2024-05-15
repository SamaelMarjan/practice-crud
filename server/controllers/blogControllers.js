const Blog = require("../models/blogModel");

// create blog controllers
exports.createBLogControllers = async (req, res) => {
  try {
    const { title, desc, image } = req.body;
    // validations
    if (!title || !desc || !image) {
      return res.status(200).json({
        success: false,
        message: "Fill all the field",
      });
    }
    const blog = await Blog({ title, desc, image }).save();
    return res.status(200).json({
      success: true,
      message: "Blog created successfully",
      blog,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message: "Blog creating failed",
      error,
    });
  }
};

// get all blog controllers
exports.getBlogsController = async (req, res) => {
  try {
    const blogs = await Blog.find({});
    return res.status(200).json({
      success: true,
      message: "All blogs are here",
      count: blogs.length,
      blogs,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message: "Faild to get all blogs",
      error,
    });
  }
};

// get single blog controllers
exports.singleBlogController = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(200).json({
        success: false,
        message: "Blog did not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Here is the blog",
      blog,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message: "Failed to get blog",
      error,
    });
  }
};

// update blog controllers
exports.updateBLogController = async (req, res) => {
  try {
    const { id } = req.params;
    const update = await Blog.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );
    return res.status(200).json({
      success: true,
      message: "Successfully updated",
      update,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: true,
      message: "Failed to update blog",
      error,
    });
  }
};

// delete blog controllers
exports.deleteBlogController = async (req, res) => {
  try {
    const { id } = req.params;
    await Blog.findByIdAndDelete(id);
    return res.status(200).json({
      success: true,
      message: "Blog deleted successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message: "Failed to delete blog",
    });
  }
};
