import App from "../app";
import request from "supertest";

describe("Home Routes test example", () => {
  describe("Supertest Integration", () => {
    it("should return potato gonna potato if id is not set", done => {
      request(App)
        .get("/")
        .expect({ potato: "gonna potate" }, done);
    });

    it("should return testing true if id is equal to 1337", done => {
      request(App)
        .get("/?id=1337")
        .expect({ testing: true }, done);
    });
  });
});
