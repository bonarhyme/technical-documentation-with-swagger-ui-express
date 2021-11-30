const basicInfo = require("./BasicInfo");
const servers = require("./Server");
const components = require("./Components");
const tags = require("./Tags");
const testDocs = require("./test");

module.exports = {
  ...basicInfo,
  ...servers,
  ...components,
  ...tags,
  ...testDocs,
};
