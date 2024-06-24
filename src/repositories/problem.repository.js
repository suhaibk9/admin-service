const { Problem } = require('../models/index');
const NotFound = require('../errors/NotFound.error');
const logger = require('../config/logger.config');
class ProblemRepository {
  //Create a new problem
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
  //Get all problems
  async getAllProblems() {
    try {
      const allProblems = await Problem.find({});
      return allProblems;
    } catch (err) {
      throw err;
    }
  }
  //Get a problem by id
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
  //Delete a problem by id
  async deleteProblem(id) {
    try {
      const problem = await Problem.findByIdAndDelete(id);
      if (!problem) {
        logger.error(`Problem with id: ${id} not found in the DB`);
        throw new NotFound('Problem', id);
      }
      return problem;
    } catch (err) {
      if (err.name === 'CastError') {
        logger.error(`Problem with id: ${id} not found in the DB`);
        throw new NotFound('Problem', id);
      }
      throw err;
    }
  }
}

module.exports = ProblemRepository;
