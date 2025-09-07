import type { HardhatUserConfig } from "hardhat/config";

import hardhatToolboxViemPlugin from "@nomicfoundation/hardhat-toolbox-viem";
import hardhatEthers from "@nomicfoundation/hardhat-ethers";

import dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  plugins: [hardhatToolboxViemPlugin, hardhatEthers],
  solidity: "0.8.20",
  networks: {
    martius: {
      url: "https://martius-i.testnet.romeprotocol.xyz",
      chainId: 121214,
      type: "http",
      accounts: [process.env.PRIVATE_KEY as string],
    },
  },
};

export default config;
