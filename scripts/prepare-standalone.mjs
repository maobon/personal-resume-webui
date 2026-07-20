import {cpSync, existsSync, mkdirSync} from "node:fs";
import {join} from "node:path";

const standaloneDirectory = join(".next", "standalone");

if (!existsSync(standaloneDirectory)) {
    throw new Error("Standalone build output was not found. Run `next build` first.");
}

mkdirSync(join(standaloneDirectory, ".next"), {recursive: true});
cpSync(join(".next", "static"), join(standaloneDirectory, ".next", "static"), {
    recursive: true,
});

if (existsSync("public")) {
    cpSync("public", join(standaloneDirectory, "public"), {recursive: true});
}
