const { FuseBox, WebIndexPlugin, QuantumPlugin } = require("fuse-box");

const isProduction = process.env.NODE_ENV == "PROD";
console.log('process.env.NODE_ENV', process.env.NODE_ENV);
console.log('NODE_ENV prod ?', isProduction);

const fuse = FuseBox.init({
  homeDir: "src",
  target: "browser@es6",
  output: "dist/$name.js",
  plugins: [WebIndexPlugin(), isProduction && QuantumPlugin()],
});

if (! isProduction) {
  fuse.dev(); // launch http server
}

fuse
  .bundle("app")
  .instructions(" > index.ts")
  .hmr()
  .watch();
fuse.run();

