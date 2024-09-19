const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

router.get('/', blogController.getAllBlogs);
router.get('/:id', blogController.getBlogById);
router.post('/', blogController.createBlog);
router.put('/:id', blogController.updateBlog);
router.delete('/:id', blogController.deleteBlog);
router.post('/:blogId/comments', blogController.createComment);
router.get('/:blogId/comments', blogController.getCommentsByBlog);
router.post('/:id/like', blogController.likeBlog);
router.post('/:id/dislike', blogController.dislikeBlog);
router.get('/:blogId/likes', blogController.getLikesAndDislikes);
router.get('/search', blogController.searchBlogs);

module.exports = router;