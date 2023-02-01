function installPackage (){
    const { exec } = require("child_process");

    exec("cp -r node_modules/ospinajuanp-single-page/* . && rm -r bin && rm src/install.js", (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
    });
}

module.exports={
    installPackage
}