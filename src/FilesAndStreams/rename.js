const fs = require("fs");
const path = require("path");
const exec = require("child_process").exec;

try {
  exec("rm ./lib2/*");
  exec("rm -rf ./lib2/", () => {
    console.log("lib2 folder was successfully deleted");
  });
} catch (err) {
   throw err;
};

function copyOver (srcFoldr, destFoldr) {
  fs.mkdir(destFoldr, (err)=> {
    if (err) throw err;
    console.log(`'${ destFoldr }' was successfully created!`)

    fs.readdir(srcFoldr, (err, contentPath) => {

      contentPath.forEach(file => {
          let srcPath = path.join(__dirname, srcFoldr, file);
          let destPath = path.join(__dirname, destFoldr, file);
        if (fs.statSync(srcPath).isDirectory) {
          copyOver(path.basename(srcPath), path.basename(destPath))
        } else {
          fs.copyFileSync(srcPath, destPath)
          console.log(`${srcPath} was copied to ${destPath}...`)
        }
      });

      console.log(`'${ srcFoldr }' directory contents were successfully copied to ${destFoldr}!`)
    });
  });
};

copyOver("lib", "lib2")
