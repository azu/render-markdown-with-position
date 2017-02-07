// MIT © 2017 azu
"use strict";
var remark = require("remark");
var html = require("./markdown-to-html");
module.exports = function(content, options) {
    var file = remark().use(html, options).process(content.split("\n").join("\n"));
    return String(file);
};