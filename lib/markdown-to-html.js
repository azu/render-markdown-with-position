// See https://github.com/wooorm/remark-html
var xtend = require("xtend");
var toHAST = require("mdast-util-to-hast");
// add hack poin
var toHTML = require("@azu/hast-util-to-html");
var sanitize = require("hast-util-sanitize");
module.exports = function plugin(processor, options) {
  var settings = options || {};
  var clean = settings.sanitize;
  var schema = clean && typeof clean === "object" ? clean : null;

  function Compiler(file) {
        /* istanbul ignore if - vfile@1.0.0 */
    if (file.extension) {
      file.move({ extension: "html" });
    }

    if (file.extname) {
      file.extname = ".html";
    }
  }

  function compile(node) {
    var root = node && node.type && node.type === "root";
    var hast = toHAST(node, { allowDangerousHTML: !clean });
    var result;

    if (clean) {
      hast = sanitize(hast, schema);
    }

    result = toHTML(hast, xtend(settings, {
      allowDangerousHTML: !clean,
    }));

        /* Add a final newline. */
    if (root && result.charAt(result.length - 1) !== "\n") {
      result += "\n";
    }

    return result;
  }
  Compiler.prototype.compile = compile;
  processor.Compiler = Compiler;
};
