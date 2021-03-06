const classify = require("../classify");
const classifications = require("../../../classifications");
const renderResults = require('./results');
const renderMaturitySummary = require('./maturity-summary');

module.exports = exports = function renderReport({ audits, results }, refDate) {

  // Apply maturity model classification
  results.forEach(result => result.classification = classify(classifications, result.results));
  
  return `
  ${renderMaturitySummary(classifications, results)}
  ${renderResults(audits, results, refDate)}
  `;
}
