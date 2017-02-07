# render-markdown-with-position

Render markdown to HTML with data-position

**NOTE** THIS IS Proof of Concept.

## Install

Install with [npm](https://www.npmjs.com/):

    npm install render-markdown-with-position

## Usage

```js
const assert = require("assert");
const fs = require("fs");
const path = require("path");
const README = fs.readFileSync(path.join(__dirname, "..", "README.md"), "utf-8");
const render = require("../lib");
const HTML = render(README);
console.log(HTML);
```

## Changelog

See [Releases page](https://github.com/azu/render-markdown-with-position/releases).

## Running tests

Install devDependencies and Run `npm test`:

    npm i -d && npm test

## Contributing

Pull requests and stars are always welcome.

For bugs and feature requests, [please create an issue](https://github.com/azu/render-markdown-with-position/issues).

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

- [github/azu](https://github.com/azu)
- [twitter/azu_re](https://twitter.com/azu_re)

## License

MIT © azu

Thanks to [wooorm/remark-html: Compile Markdown to HTML with remark](https://github.com/wooorm/remark-html "wooorm/remark-html: Compile Markdown to HTML with remark")