const { StatusCodes } = require('http-status-codes');
//Ping Check - GET /api/v1/problems/ping
function pingProblemController(req, res) {
  return res.json({ message: 'Problem Controller Alive' });
}
//Get a problem by id - GET /api/v1/problems/:id
function addProblem(req, res) {
  return res
    .status(StatusCodes.NOT_IMPLEMENTED)
    .json({ message: 'Not Implemented' });
}
//Create a problem - POST /api/v1/problems
function createProblem(req, res) {
  return res
    .status(StatusCodes.NOT_IMPLEMENTED)
    .json({ message: 'Not Implemented' });
}
//Get a problem by id - GET /api/v1/problems/:id
function getProblem(req, res) {
  return res
    .status(StatusCodes.NOT_IMPLEMENTED)
    .json({ message: 'Not Implemented' });
}
//Get all problems - GET /api/v1/problems
function getProblems(req, res) {
  return res
    .status(StatusCodes.NOT_IMPLEMENTED)
    .json({ message: 'Not Implemented' });
}
//Delete a problem by id - DELETE /api/v1/problems/:id
function deleteProblem(req, res) {
  return res
    .status(StatusCodes.NOT_IMPLEMENTED)
    .json({ message: 'Not Implemented' });
}
//Update a problem by id - PUT /api/v1/problems/:id
function updateProblem(req, res) {
  return res
    .status(StatusCodes.NOT_IMPLEMENTED)
    .json({ message: 'Not Implemented' });
}
module.exports = {
  addProblem,
  createProblem,
  getProblem,
  getProblems,
  deleteProblem,
  updateProblem,
  pingProblemController,
};
