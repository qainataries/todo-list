import inquirer from "inquirer";
let todoList=[];
let conditions= true;
console.log("\n \t Welcome to Zubaida -Todo-List Application \n \t");
while(conditions) {
    let addTask=await inquirer.prompt([{
        name:"task",
        type:"input",
        message:"Enter Your New Task",
    }]);
    todoList.push(addTask.task);
    console.log(`${addTask.task} Task added in Todo- List successfully`);
    let addMoreTask=await inquirer.prompt([{
        name:"addmore",
        type:"confirm",
        message:"Do you Want to add more Task?",
        default:"False",

    }]);
    conditions=addMoreTask.addmore
}
console.log("Your updated Todo-List:", todoList);