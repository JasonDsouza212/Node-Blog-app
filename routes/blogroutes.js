const express=require("express");
const Blog=require('../models/blog.js');
const router=express.Router();
const controller=require('../controllers/blogContrellers')


router.post('/blogs',controller.blog_create_post);
router.get('/blogs/create',controller.blog_create_get);
router.get('/blogs',controller.blog_index);
router.get('/blogs/:id',controller.blog_details);
router.delete('/blogs/:id',controller.blog_delete);
   
module.exports=router;