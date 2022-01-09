const child_process = require("child_process");
const execCMD = function(cmd){
  child_process.exec(cmd, function(error, stdout, stderr) {
    if(error) {
        console.error('error: ' + error);
        return;
    }
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
  })
}
const cmd = 'echo "$(date +%s)" > record.txt && git add -A && git commit -am "auto commit" && git push origin main';
execCMD(cmd);
