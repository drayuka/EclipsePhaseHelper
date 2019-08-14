import * as redis from "redis";
import * as readline from "readline";

let client = redis.createClient();

client.on("error", function (err) {
    console.log("Error " + err);
});


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let commands = input.split(' ');
    let commandName = commands.shift();
    client.send_command(commandName, commands, redis.print);
});
