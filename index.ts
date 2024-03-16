import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter 1st Number", type: "number", name: "firstnumber" },
  { message: "Enter 2nd Number", type: "number", name: "secondnumber" },
  {
    message: "Select one of the opeartors ti perform operations",
    type: "list",
    name: "Operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);
//conditional statement
if (answer.Operator === "Addition") {
  console.log(answer.firstnumber + answer.secondnumber);
} else if (answer.Operator === "Subtraction") {
  console.log(answer.firstnumber - answer.secondnumber);
} else if (answer.Operator === "Multiplication") {
  console.log(answer.firstnumber * answer.secondnumber);
} else if (answer.Operator === "Division") {
  console.log(answer.firstnumber / answer.secondnumber);
} else {
  console.log("Please type correct operator");
}
