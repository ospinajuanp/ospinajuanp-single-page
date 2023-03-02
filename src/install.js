function installPackage (){
    const { exec } = require("child_process");
    console.log('Waiting...')
    console.log('Package installation and configuration');
    exec("cp -r node_modules/ospinajuanp-single-page/\.babelrc . && cp -r node_modules/ospinajuanp-single-page/* . && mv package-example.json ./package.json && rm -r package-lock.json && rm -r bin && rm src/install.js && npm install", (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
        console.log('Installation done')
    });
}

module.exports={
    installPackage
}