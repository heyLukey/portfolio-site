const expect = require("chai").expect;
const nodemailerMock = require("nodemailer-mock");
const sendEmail = require("../../src/utils/sendEmail");

describe("when sendEmail is called", () => {
  const subject = true;
  const text = "Test email text";
  nodemailerMock.mock.getSentMail();

  afterEach(async () => {
    // Reset the mock back to the defaults after each test
    nodemailerMock.mock.reset();
  });

  it("should send correct Email", (done) => {
    sendEmail(subject, text, nodemailerMock).then((res) => {
      const sentMail = nodemailerMock.mock.getSentMail();
      expect(sentMail).to.have.lengthOf(1);
      expect(sentMail[0].from).to.equal(undefined);
      expect(sentMail[0].to).to.equal(undefined);
      expect(sentMail[0].subject).to.equal(subject);
      expect(sentMail[0].text).to.equal(text);
      expect(res).to.be.an("undefined");
      done();
    });
  });
});
