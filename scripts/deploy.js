import { network } from "hardhat";

const { ethers } = await network.connect();

async function main() {
  const HelloWorld = await ethers.getContractFactory("HelloWorld");
  for (let i = 0; i < 10000; i++) {
    console.log("Deploying HelloWorld contract...");
    const hello = await HelloWorld.deploy();
    await hello.waitForDeployment();
    console.log("HelloWorld deployed to:", await hello.getAddress());
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
