const { expect } = require("chai");
const request = require("request");

describe("Login Endpoint", () => {
  it("should return a welcome message with the provided username", (done) => {
    request.post(
      "http://localhost:7865/login",
      { json: { userName: "Betty" } },
      (error, response, body) => {
        expect(body).to.equal("Welcome Betty");
        done();
      }
    );
  });
});

describe("Available Payments Endpoint", () => {
  it("should return the correct payment methods", (done) => {
    request.get("http://localhost:7865/available_payments", (error, response, body) => {
      const expectedResponse = {
        payment_methods: {
          credit_cards: true,
          paypal: false,
        },
      };
      expect(JSON.parse(body)).to.deep.equal(expectedResponse);
      done();
    });
  });
});
