const Manager = require("./lib/Manager");

describe("Manager", () => {
  const name = "";
  const id = "";
  const email = "";
  const officeNum = "";
  const test = { name, id, email, officeNum };

  const manager = new Manager(test);

  it("Should pass the test Name value", () => {
    expect(manager.getName()).toEqual(name);
  });
  it("Should return the test ID value", () => {
    expect(manager.getId()).toEqual(id);
  });
  it("Should return the test Email value", () => {
    expect(manager.getEmail()).toEqual(email);
  });
  it("Should return the Office Number value", () => {
    expect(manager.getOfficeNum()).toEqual(officeNum);
  });
  it("Should return Manager for getRole method", () => {
    expect(manager.getRole()).toEqual("Manager");
  });
});