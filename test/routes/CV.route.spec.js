const supertest = require("supertest");
const server = require("../../src/server.js");

describe("When downloading a file from /cv/download", () => {
  let request;
  before(() => {
    const app = server();
    request = supertest.agent(app);
  });

  it("should respond with 200 OK", (done) => {
    request.get("/cv/download").expect(200, done);
  });
});
