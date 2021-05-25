const aplicacao = require("../../index");
const request = require("supertest");
describe("Routes User", () => {
  it("Get all cities and number of users", async () => {
    const response = await request(aplicacao).get("/users/all/city");
    expect(response.status).toBe(200);
  });
  it("Get all the users of a city", async () => {
    const city = "Spring City, MS";
    const response = await request(aplicacao).get(`/users/${city}`);
    expect(response.body[0].city).toBe(city);
  });
  it("Get an user by ID", async () => {
    const id = 15;
    const response = await request(aplicacao).get(`/user/${id}`);
    expect(response.body.id).toBe(id);
  });

  it("Update an user by ID", async () => {
    const response = await request(aplicacao).post("/user").send({
      id: 1,
      first_name: "Laura",
      last_name: "Rodrigues",
      email: "lrichards0@reverbnation.com",
      gender: "Female",
      company: "Meezzy",
      city: "Warner, NH",
      title: "Biostatistician III",
    });
    expect(response.body[0]).toBe(1);
  });
});
