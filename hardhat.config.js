require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {
      accounts: [
        {
          privateKey: `0x${process.env.PRIVATE_KEY1}`,
          balance: "50000000000000000000000",
        },
        {
          privateKey: `0x${process.env.PRIVATE_KEY2}`,
          balance: "70000000000000000000000",
        },
        {
          privateKey: `0x${process.env.PRIVATE_KEY3}`,
          balance: "10000000000000000000000",
        },
      ],
    },
  },
};
