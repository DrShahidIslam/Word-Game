#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let welcomeMsg = console.log(chalk.bgBlackBright("Welcome to the GAME"));
let randomNum = Math.random() * 10;
let guessNumfunc = async () => {
    for (let i = 0; i < 4; i++) {
        let guessedNum = await inquirer.prompt([
            { name: "num",
                type: "number",
                message: "Please type your guessed number"
            },
        ]);
        if (randomNum === guessedNum.num) {
            console.log(chalk.redBright("Right Answer"));
        }
        else if (guessedNum.num === randomNum) {
            console.log(chalk.blue("Wrong answer, please try again"));
        }
        else {
            console.log(chalk.blue("Sorry, You Failed"));
        }
    }
};
guessNumfunc();
