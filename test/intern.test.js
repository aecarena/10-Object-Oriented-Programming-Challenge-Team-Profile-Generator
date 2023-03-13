const Intern = require("../lib/Intern");

describe("Intern", () => {
  const name = "";
  const id = "";
  const email = "";
  const school = "";

  const intern = new Intern(name, id, email, school);

  it("Should pass the test Name value", () => {
    expect(intern.getName()).toEqual(name);
  });
  it("Should return the test ID value", () => {
    expect(intern.getId()).toEqual(id);
  });
  it("Should return the test Email value", () => {
    expect(intern.getEmail()).toEqual(email);
  });
  it("Should return the test School value", () => {
    expect(intern.getSchool()).toEqual(school);
  });
  it("Should return Intern for getRole method", () => {
    expect(intern.getRole()).toEqual("Intern");
  });
});
