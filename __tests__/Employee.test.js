const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("inform", () => {
    it("should describe given employee", () => {
      const str = [];

      const result = new Employee().inform(str);

      expect(result).toEqual(inform);
    })
  });
});
