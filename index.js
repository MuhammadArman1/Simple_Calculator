import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "Firstname" },
    { message: "Enter second number", type: "number", name: "secondname" },
    {
        message: "Here is our answer to",
        type: "list",
        name: "oprators",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
if (answer.oprators === "Addition") {
    console.log(answer.Firstname + answer.secondname);
}
else if (answer.oprators === "Subtraction") {
    console.log(answer.Firstname - answer.secondname);
}
else if (answer.oprators === "Multiplication") {
    console.log(answer.Firstname * answer.secondname);
}
else if (answer.oprators === "Division") {
    console.log(answer.Firstname / answer.secondname);
}
