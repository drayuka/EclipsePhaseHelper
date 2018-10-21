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

client.add_command("json.set");

client.add_command("json.get");
interface RedisClient {
    json_get: (key: string, path: string ) => string
    json_set: (key: string, path: string, value: string) => string,
}

rl.on('line', (input) => {
    let commands = input.split(' ');
    let commandName = commands.shift();
    client.send_command(commandName, commands, redis.print);
});
