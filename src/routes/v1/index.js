const express=require('express');
const v1Router=express.Router();
const problemRouter=require('./problems.routes');
//API Router start with /api/v1/problems
v1Router.use('/problems',problemRouter);
module.exports=v1Router;