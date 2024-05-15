const {
  createBLogControllers,
  getBlogsController,
  singleBlogController,
  updateBLogController,
  deleteBlogController,
} = require("../controllers/blogControllers");

const router = require("express").Router();

// create blog router || POST
router.post("/create", createBLogControllers);

// get blogs router || GET
router.get("/blogs", getBlogsController);

// get single blog with id || GET
router.get("/blogs/:id", singleBlogController);

// update blog with id || PUT
router.put("/blogs/update/:id", updateBLogController);

// delete blog with id || DELETE
router.delete("/blogs/delete/:id", deleteBlogController);

module.exports = router;
