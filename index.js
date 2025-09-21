import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

/* 
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

// 1. Use the inquirer npm package to get user input.
inquirer
  .prompt([
    {
      message: "Enter the URL you want to turn into a QR code:",
      name: "url",
    },
  ])
  .then((answers) => {
    const url = answers.url;

    // Generate QR code and save it as PNG
    const qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_code.png"));

    // Save the entered URL into a text file
    fs.writeFileSync("URL.txt", url);

    console.log(
      "QR code generated as 'qr_code.png' and URL saved in 'URL.txt'"
    );
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Prompt couldn't be rendered in the current environment.");
    } else {
      console.error("Something went wrong:", error);
    }
  });
