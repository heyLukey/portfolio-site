const supertest = require("supertest");
const server = require("../../src/server.js");

describe("When posting email from /email/send", () => {
  let request;
  before(() => {
    const app = server();
    request = supertest.agent(app);
  });

  it("should respond with 200 OK", (done) => {
    request
      .post("/email/send")
      .send({ subject: "test subject", text: "test text" })
      .expect(200, done);
  });
});
