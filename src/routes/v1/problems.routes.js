const express = require('express');
const problemRouter = express.Router();
const { problemController } = require('../../controllers/index');
//Ping Check
problemRouter.get('/ping', problemController.pingProblemController);
//Get a problem by id
problemRouter.get('/:id', problemController.getProblem);
//Create a problem
problemRouter.post('/', problemController.createProblem);
//Update a problem by id
problemRouter.put('/:id', problemController.updateProblem);
//Delete a problem by id
problemRouter.delete('/:id', problemController.deleteProblem);
//Get all problems
problemRouter.get('/', problemController.getProblems);
module.exports = problemRouter;
