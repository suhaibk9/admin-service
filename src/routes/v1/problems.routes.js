const express = require('express');
const problemRouter = express.Router();
const { problemController } = require('../../controllers/index');
//Ping Check - GET /api/v1/problems/ping
problemRouter.get('/ping', problemController.pingProblemController);
//Get a problem by id - GET /api/v1/problems/:id
problemRouter.get('/:id', problemController.getProblem);
//Create a problem - POST /api/v1/problems
problemRouter.post('/', problemController.createProblem);
//Update a problem by id - PUT /api/v1/problems/:id
problemRouter.put('/:id', problemController.updateProblem);
//Delete a problem by id - DELETE /api/v1/problems/:id
problemRouter.delete('/:id', problemController.deleteProblem);
//Get all problems - GET /api/v1/problems
problemRouter.get('/', problemController.getProblems);
module.exports = problemRouter;
