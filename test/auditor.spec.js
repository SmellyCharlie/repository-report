const { expect } = require("chai");
const sinon = require("sinon");
const createAuditor = require("../src/auditor");

describe('auditor', function () {
  it('should execute each audit', async function () {
    const mockAudits = {
      test: {
        details: {},
        getResults: sinon.stub().returns('test result')
      }
    }
    const mockArtefacts = {
      test: true
    }

    const auditor = createAuditor(mockAudits);

    const actual = auditor.getAuditResults(mockArtefacts);

    expect(actual).to.eql({
      test: 'test result'
    });
  });

  it('should return details of each audit', async function () {
    const auditor = createAuditor({
      test: { details: 'test details' }
    });

    expect(auditor.details).to.eql({
      test: 'test details'
    });
  })
})
