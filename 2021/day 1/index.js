const fs = require("fs");

//Part 1//
function largerMeasurementFinder(file) {
  fs.readFile(__dirname + file, (err, data) => {
    let counter = 0;

    const parsedData = data
      .toString()
      .replace(/(\r\n|\n|\r)/gm, " ")
      .split(" ");

    for (let i = 1; i < parsedData.length; i++) {
      if (Number(parsedData[i]) > Number(parsedData[i - 1])) {
        counter += 1;
      }
    }

    console.log(counter);
  });
}

largerMeasurementFinder("/input.txt");
