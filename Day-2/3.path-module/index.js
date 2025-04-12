const path = require("path");

console.log(path.dirname(__filename));

console.log(path.basename(__filename));

console.log(path.extname(__filename));

const joinPath = path.join("/user", "document", "projects", "srcipt.js");
console.log(joinPath);

const resolvePath = path.resolve("/user", "document", "projects", "srcipt.js");
console.log(resolvePath);

const normalize = path.normalize("\\user\\.document\\..\\projects\\script.js");
console.log(normalize);
