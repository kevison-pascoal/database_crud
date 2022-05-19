const progressBar = require("progress");
const { exec } = require('child_process');
const cowsay = require('cowsay');
const bar = new progressBar(":bar", {total: 90});
const time = setInterval(() => {
  bar.tick();
  if(bar.complete) {
    clearInterval(time);
    console.log("=== Process Package ===");
    exec(`npx cowsay Vaca ta on paê`, (error, stdout, stderr) => {
      if(error) {
        console.log(`error: ${error.message}`);
      } 
      if (stderr) {
        console.log(`stderr: ${stderr}`);
      } 
      if (stdout) {
        for(let i = 0; i < 10; i++) {
          console.log(cowsay.say({
            text: "Helo World",
            e: "oO",
            r: true,
          }));
          console.log();
        }
      } 
    });
  }
}, 20);
