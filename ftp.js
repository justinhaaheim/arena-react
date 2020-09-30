var FtpDeploy = require("ftp-deploy");
var ftpDeploy = new FtpDeploy();
const dotenv = require("dotenv");
dotenv.config();

var config = {
  user: process.env.FTP_USER,
  // Password optional, prompted if none given
  password: process.env.FTP_PASSWORD,
  host: process.env.FTP_HOST,
  port: 21,
  localRoot: __dirname + "/build",
  remoteRoot: process.env.FTP_REMOTE_ROOT,
  // include: ["*", "**/*"],      // this would upload everything except dot files
  include: ["*"],
  // e.g. exclude sourcemaps, and ALL files in node_modules (including dot files)
  exclude: [
    "dist/**/*.map",
    "node_modules/**",
    "node_modules/**/.*",
    ".git/**",
  ],
  // delete ALL existing files at destination before uploading, if true
  deleteRemote: false,
  // Passive mode is forced (EPSV command is not sent)
  forcePasv: true,
};

// use with promises
ftpDeploy
  .deploy(config)
  // .then(res => console.log("finished:", res))
  .catch((err) => console.log(err));

// use with callback
// ftpDeploy.deploy(config, function (err, res) {
//     if (err) console.log(err);
//     else console.log("finished:", res);
// });

ftpDeploy.on("uploading", function (data) {
  console.log(
    data.transferredFileCount +
      " of " +
      data.totalFilesCount +
      ": '" +
      data.filename +
      "'"
  );
});
// ftpDeploy.on("uploaded", function (data) {
//     console.log(data); // same data as uploading event
// });
// ftpDeploy.on("log", function (data) {
//     console.log(data); // same data as uploading event
// });
ftpDeploy.on("upload-error", function (data) {
  console.log(data.err); // data will also include filename, relativePath, and other goodies
});
