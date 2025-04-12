console.log("Node module wrapper");

console.log("__filename:", __filename);
console.log("dirname:", __dirname);

module.exports.greet = function (name) {
  console.log("hello", name);
};
