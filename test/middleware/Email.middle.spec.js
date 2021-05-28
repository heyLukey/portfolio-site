const expect = require("chai").expect;
const sinon = require("sinon");
const validEmail = require("../../src/middleware/Email.middle");

// Mock res
const response = {
  status: (code) => {
    return {
      json: (data) => {
        return data;
      },
    };
  },
};

describe("when validEmail is called", () => {
  it("should reject if no subject", () => {
    const next = sinon.spy();
    const request = { body: { text: "test text" } };
    return validEmail(request, response, next).then((res) => {
      expect(res).to.contain.keys("error");
      expect(res.error).to.equal("Subject missing!");
      expect(next.called).to.be.false;
    });
  });

  it("should reject if subject.length is > 64", () => {
    const next = sinon.spy();
    const bigSubject = "#".repeat(65);
    const request = { body: { subject: bigSubject, text: "test text" } };
    return validEmail(request, response, next).then((res) => {
      expect(res).to.contain.keys("error");
      expect(res.error).to.equal("Max subject length is 64!");
      expect(next.called).to.be.false;
    });
  });

  it("should reject if no text", () => {
    const next = sinon.spy();
    const request = { body: { subject: "test subject" } };
    return validEmail(request, response, next).then((res) => {
      expect(res).to.contain.keys("error");
      expect(res.error).to.equal("Text missing!");
      expect(next.called).to.be.false;
    });
  });

  it("should reject if text.length > 16384", () => {
    const next = sinon.spy();
    const bigText = "#".repeat(16385);
    const request = { body: { subject: "test subject", text: bigText } };
    return validEmail(request, response, next).then((res) => {
      expect(res).to.contain.keys("error");
      expect(res.error).to.equal("Max subject length is 16384!");
      expect(next.called).to.be.false;
    });
  });

  it("should call next() if both subject and text are valid", () => {
    const next = sinon.spy();
    const request = { body: { subject: "test subject", text: "test text" } };
    return validEmail(request, response, next).then((res) => {
      expect(next.called).to.be.true;
    });
  });
});
