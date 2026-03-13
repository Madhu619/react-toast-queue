const fs = require("fs");
const path = require("path");

const source = path.resolve(__dirname, "..", "src", "styles", "toast.css");
const outDir = path.resolve(__dirname, "..", "dist");
const target = path.join(outDir, "styles.css");

fs.mkdirSync(outDir, { recursive: true });
fs.copyFileSync(source, target);
