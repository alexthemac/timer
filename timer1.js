//STORES COMMAND LINE ARGUMENTS IN INPUT ARRAY
const inputArray = process.argv;
//LOGS BEEP BEEP! IN TERMINAL AFTER X SECONDS PASS, WHERE X IS THE COMMAND LINE ARGUMENT
for (let i = 2; i < inputArray.length; i++) {
  setTimeout(() => process.stdout.write("beep beep!\n"), 1000 * inputArray[i]);
}
