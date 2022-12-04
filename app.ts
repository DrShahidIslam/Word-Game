#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let welcomeMsg = console.log(chalk.bgBlackBright("Welcome to the GAME"));

let randomNum = Math.round(Math.random() * 10);
let guessNumfunc =async () => {
    for(let i=0; i<4; i++){
        let guessedNum : {num:number} = await inquirer.prompt([
        {name: "num",
        type: "number",
        message: "Please type your guessed number"
        },
        ]);

        if (randomNum === guessedNum.num){
            console.log(chalk.redBright("Right Answer"));
            break;
        }else{
            console.log(chalk.redBright("Wrong Answer, Please Try Again"));
        }
    
}}
guessNumfunc()