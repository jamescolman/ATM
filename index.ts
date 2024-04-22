#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

async function ATM() {
    

let mybalance = 10000; // dollars
let mypin = 8990;

const answer = await inquirer.prompt([
  {
    message: "Enter your pin: ",
    type: "number",
    name: "Pin",
  },
]);

let code = answer.Pin === mypin ? "pin is correct" : "invalid pin";
console.log(code);

const answer1 = await inquirer.prompt([
  {
    message: "Select the option: ",
    type: "list",
    name: "operations",
    choices: ["Deposit", "Withdrawal", "Check Balance","Fast Cash"],
  }
]);

if (answer1.operations === "Withdrawal") {
  let answer2 = await inquirer.prompt([
    {
      message: "Enter you amount to be withdrawn: ",
      type: "number",
      name: "amount",
      
    }

  ]);
  if(answer2.amount <= mybalance){
    mybalance -= answer2.amount;
  }
  else{
    console.log("Insufficient Balance");
  }

  
  console.log(chalk.bgBlackBright("Your Current amount is : " + mybalance));
  return;
} else if (answer1.operations === "Deposit") {
  let answer3 = await inquirer.prompt([
    {
      message: "Enter your amount to be deposited: ",
      type: "number",
      name: "amount",
    }
  ]);
  mybalance += answer3.amount;
  console.log(chalk.bgBlackBright("Your Current amount is : " + mybalance));
  return;
} else if (answer1.operations === "Check Balance") {
  console.log(chalk.bgBlackBright(mybalance));
  return;
}

else if (answer1.operations === "Fast Cash"){
let answer4 = await inquirer.prompt([{

name:"Fast_amount",
type:"list",
message:"Select the amount you want withdrawn: ",
choices:["1000","5000","10000","20000","25000"]

}])
if(answer4.Fast_amount === "1000"){
 mybalance -= 1000;
 console.log("Now your balance is: ",mybalance);
}
if(answer4.Fast_amount === "5000"){
    mybalance -= 5000;
    console.log("Now your balance is: ",mybalance);
   }

if(answer4.Fast_amount === "10000"){
    mybalance -= 10000;
    console.log("Now your balance is: ",mybalance);
   }

else{
    console.log("Insufficient Balance");
}

}



}

ATM();