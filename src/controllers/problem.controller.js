function pingProblemController(req, res) {
  return res.json({ message: 'Problem Controller Alive' });
}
function addProblem(req, res) {}
function createProblem(req, res) {}
function getProblem(req, res) {}
function getProblems(req, res) {}
function deleteProblem(req, res) {}
function updateProblem(req, res) {}
module.exports = {
  addProblem,
  createProblem,
  getProblem,
  getProblems,
  deleteProblem,
  updateProblem,
  pingProblemController,
};
