const { Problem } = require('../models/index');
const NotFound = require('../errors/NotFound.error');
class ProblemRepository {
  async createProblem(problemData) {
    {
      try {
        const problem = await Problem.create({
          title: problemData.title,
          description: problemData.description,
          difficulty: problemData.difficulty,
          testCases: problemData.testCases ? problemData.testCases : [],
        });
        console.log('In Repository', problem);
        return problem;
      } catch (err) {
        throw err;
      }
    }
  }
  async getAllProblems() {
    try {
      const allProblems = await Problem.find({});
      return allProblems;
    } catch (err) {
      throw err;
    }
  }
  async getProblem(id) {
    try {
      const problem = await Problem.findById(id);
      if (!problem) throw new NotFound('Problem', id);
      return problem;
    } catch (err) {
      if (err.name === 'CastError') throw new NotFound('Problem', id);
      throw err;
    }
  }
}

module.exports = ProblemRepository;
