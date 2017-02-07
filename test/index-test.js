const assert = require("assert");
const fs = require("fs");
const path = require("path");
const README = fs.readFileSync(path.join(__dirname, "..", "README.md"), "utf-8");
const render = require("../lib");
const HTML = render(README);
assert(HTML.length > 0);
console.log(HTML);
