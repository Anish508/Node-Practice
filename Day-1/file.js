console.log("File handling code");

const fs = require("fs");
fs.writeFile("output.txt", "Writing Files", (err) => {
  if (err) {
    console.log("Error Occured");
  } else {
    console.log("Files written succesfully");
  }
});
