const first = require("./first");
const second = require("./second");

module.exports = {
  paths: {
    "/": {
      ...first,
    },
    "/second/{id}": {
      ...second,
    },
  },
};
