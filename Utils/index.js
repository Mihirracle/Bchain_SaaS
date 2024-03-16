// import { ethers } from "ethers";
// import Web3Modal from "web3modal";

// import {
//   LookUpContract_ABI,
//   LookUpContract_ADDRESS,
//   ERC20Generator_ADDRESS,
//   ERC20Generator_ABI,
// } from "../Context/constants";

// const web3Modal = typeof window !== 'undefined' ? new Web3Modal() : null;

// export const CheckIfWalletConnected = async () => {
//   try {
//     if (!window.ethereum) {
//       return console.log("Install Metamask :(");
//     }

//     const accounts = await window.ethereum.request({
//       method: "eth_accounts",
//     });

//   const firstAccount = accounts[0];
//   return firstAccount;
//   } catch (error) {
//     console.error(error);
//  }
//   };


// export const ConnectWallet = async () => {
//   try {
//     if (!window.ethereum) {
//       return console.log("Install Metamask :(");
//     }

//     const accounts = await window.ethereum.request({
//       method: "eth_requestAccounts",
//     });

// const firstAccount = accounts[0];
// return firstAccount;
//   } catch (error) {
//     console.error(error);
//   }

// const fetchContract = (signerOrProvider) =>
//   new ethers.Contract(LookUpContract_ADDRESS, LookUpContract_ABI, signerOrProvider);

// export const connectingWithContract = async () => {
//   const web3modal = new Web3Modal();
//   const connection = await web3modal.connect();
//   const provider = new ethers.providers.Web3Provider(connection);
//   const signer = provider.getSigner();
//   const contract = fetchContract(signer);
//     return contract;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const getBalance = async () => {
//   try {
//   const web3modal = new Web3Modal();
//   const connection = await web3modal.connect();
//   const provider = new ethers.providers.Web3Provider(connection);
//   const signer = provider.getSigner();
//     return await signer.getBalance();
//   } catch (error) {
//     console.log(error);
//   }
// };

// const fetchTokenContract = (signerOrProvider) =>
//   new ethers.Contract(ERC20Generator_ADDRESS, ERC20Generator_ABI, signerOrProvider);

// export const connectingNativeTokenContract = async () => {
//   try {
//     const web3modal = new Web3Modal();
//     const connection = await web3modal.connect();
//     const provider = new ethers.providers.Web3Provider(connection);
//     const signer = provider.getSigner();
//     const contract = fetchTokenContract(signer);
//     }
//     return contract;
//   } catch (error) {
//     console.log(error);
//   }
// };


import { ethers } from "ethers";
import Web3Modal from "web3modal";

import {
  LookUpContract_ABI,
  LookUpContract_ADDRESS,
  ERC20Generator_ADDRESS,
  ERC20Generator_ABI,
} from "../Context/constants";

const web3Modal = typeof window !== 'undefined' ? new Web3Modal() : null;

export const CheckIfWalletConnected = async () => {
  try {
    if (!window.ethereum) {
      return console.log("Install Metamask :(");
    }

    const accounts = await window.ethereum.request({
      method: "eth_accounts",
    });

    const firstAccount = accounts[0];
    return firstAccount;
  } catch (error) {
    console.error(error);
  }
};

export const ConnectWallet = async () => {
  try {
    if (!window.ethereum) {
      return console.log("Install Metamask :(");
    }

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    const firstAccount = accounts[0];
    return firstAccount;
  } catch (error) {
    console.error(error);
  }
};

const fetchContract = (signerOrProvider) =>
  new ethers.Contract(LookUpContract_ADDRESS, LookUpContract_ABI, signerOrProvider);

export const connectingWithContract = async () => {
  try {
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = fetchContract(signer);
    return contract;
  } catch (error) {
    console.log(error);
  }
};

export const getBalance = async () => {
  try {
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    return await signer.getBalance();
  } catch (error) {
    console.log(error);
  }
};

export const fetchTokenContract = (signerOrProvider) =>
  new ethers.Contract(ERC20Generator_ADDRESS, ERC20Generator_ABI, signerOrProvider);

export const connectingNativeTokenContract = async () => {
  try {
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = fetchTokenContract(signer);
    return contract;
  } catch (error) {
    console.log(error);
  }
};
