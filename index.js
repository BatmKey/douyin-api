//git目录下新建index.js
const child_process = require("child_process");
//定义一个执行cmd的函数
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
//用&&连接多条CMD命令
const cmd = 'git add --all :/ && git commit -m "update" && git push origin master';
execCMD(cmd);
