

const Employee = require("./lib/Employee");

describe("Employee", () => {
  const name = "";
  const id = "";
  const email = "";
  const test = { name, id, email };

  const employee = new Employee(test);

  it("Should pass the testName", () => {
    expect(employee.getName()).toEqual(name);
  });
  it("Should return the testID", () => {
    expect(employee.getId()).toEqual(id);
  });
  it("Should return the testEmail", () => {
    expect(employee.getEmail()).toEqual(email);
  });
});