const { StatusCodes } = require('http-status-codes');
const NotImplemented = require('../errors/NotImplemented.error');
const { ProblemRepository } = require('../repositories/index');
const { ProblemService } = require('../services/index');
const NotFound = require('../errors/NotFound.error');

// Create a new instance of ProblemService - Dependency Injection
const problemService = new ProblemService(new ProblemRepository());

// Ping Check - GET /api/v1/problems/ping
function pingProblemController(req, res) {
  return res.json({ message: 'Problem Controller Alive' });
}

// Create a problem - POST /api/v1/problems
async function createProblem(req, res, next) {
  try {
    const newProblem = await problemService.createProblem(req.body);
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: 'Problem Created',
      data: newProblem,
      error: {},
    });
  } catch (err) {
    next(err);
  }
}

// Get a problem by id - GET /api/v1/problems/:id
async function getProblem(req, res, next) {
  try {
    const { id } = req.params;
    const problem = await problemService.getProblem(id);
    console.log('Problem by ID', problem);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: 'Problem Found',
      data: problem,
      error: {},
    });
  } catch (err) {
    next(err);
  }
}

// Get all problems - GET /api/v1/problems
async function getProblems(req, res, next) {
  try {
    const response = await problemService.getAllProblems();
    console.log('RESPONSE', response);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: 'All Problems',
      data: response,
      error: {},
    });
  } catch (err) {
    next(err);
  }
}

// Delete a problem by id - DELETE /api/v1/problems/:id
async function deleteProblem(req, res, next) {
  try {
    const id = req.params.id;
    const resp = await problemService.deleteProblem(id);
    console.log('Problem Deleted', resp);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: 'Problem Deleted',
      data: resp,
      error: {},
    });
  } catch (err) {
    next(err);
  }
}

// Update a problem by id - PUT /api/v1/problems/:id
function updateProblem(req, res, next) {
  return res
    .status(StatusCodes.NOT_IMPLEMENTED)
    .json({ message: 'Not Implemented' });
}

module.exports = {
  createProblem,
  getProblem,
  getProblems,
  deleteProblem,
  updateProblem,
  pingProblemController,
};
