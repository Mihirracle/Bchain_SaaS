require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

const NEXT_PUBLIC_POLYGON_MUMBAI_RPC = "https://rpc.ankr.com/polygon_mumbai";
const NEXT_PUBLIC_PRIVATE_KEY = "c064c081b28a7f2324592bbf257c4664c563d99f3d64296919e4c34662d56544";
module.exports = {
  solidity: "0.8.0",
  defaultNetwork: "matic",
  networks: {
    hardhat: {},
    polygon_mumbai: {
      url: NEXT_PUBLIC_POLYGON_MUMBAI_RPC,
      accounts: [`0x${NEXT_PUBLIC_PRIVATE_KEY}`],
    },
  },
};

//erc20Generator: 0xBea7D3EC634cBB3016Db6Fa632531938c1Ba5b87
//LookUpContract: 0xb98A9aEc8BF031e6F63e6E1Ee35B4FB0DA0049c1

