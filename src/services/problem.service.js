const { markdownSanitizer } = require('../utils/index');
class ProblemService {
  constructor(problemRepository) {
    this.problemRepository = problemRepository;
  }
  async createProblem(problemData) {
    try {
      problemData.description = markdownSanitizer(problemData.description);
      console.log('In Service', problemData);
      return await this.problemRepository.createProblem(problemData);
    } catch (err) {
      throw err;
    }
  }
  async getAllProblems() {
    try {
      return await this.problemRepository.getAllProblems();
    } catch (err) {
      throw err;
    }
  }
  async getProblem(id) {
    try {
      return await this.problemRepository.getProblem(id);
    } catch (err) {
      throw err;
    }
  }
}
module.exports = ProblemService;
