import { spawnSync, spawn } from "node:child_process";
import process from "node:process";

function runStep(command, args) {
  const result = spawnSync(command, args, {
    stdio: "inherit",
    env: process.env,
    shell: process.platform === "win32",
  });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

runStep("pnpm", ["prisma", "generate"]);
runStep("pnpm", ["prisma", "migrate", "deploy"]);

const buildProcess = spawn("pnpm", ["next", "build", "--turbo"], {
  stdio: "inherit",
  env: process.env,
  shell: process.platform === "win32",
});

const heartbeat = setInterval(() => {
  console.log("[build] still running");
}, 5000);

buildProcess.on("exit", (code, signal) => {
  clearInterval(heartbeat);
  process.exit(code ?? (signal ? 1 : 0));
});
