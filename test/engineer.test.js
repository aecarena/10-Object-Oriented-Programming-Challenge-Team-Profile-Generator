const Engineer = require("./lib/Engineer");

describe("Engineer", () => {
  const name = "";
  const id = "";
  const email = "";
  const github = "";
  const test = { name, id, email, github };

  const engineer = new Engineer(test);

  it("Should pass the testName value", () => {
    expect(engineer.getName()).toEqual(name);
  });
  it("Should return the testID value", () => {
    expect(engineer.getId()).toEqual(id);
  });
  it("Should return the testEmail value", () => {
    expect(engineer.getEmail()).toEqual(email);
  });
  it("Should return the testgithub value", () => {
    expect(engineer.getGithub()).toEqual(github);
  });
  it("Should return the Engineer for getRole method", () => {
    expect(engineer.getRole()).toEqual("Engineer");
  });
});