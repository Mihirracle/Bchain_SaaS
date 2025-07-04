// import React, { useState, useContext, createContext, useEffect } from "react";
// import { ethers } from "ethers";
// import Web3Modal from "web3modal";

// //INTERNAL IMPORT
// import {
//   CheckIfWalletConnected,
//   connectWallet,
//   connectingWithContract,
//   getBalance,
//   connectingNativeTokenContract,
// } from "../Utils/index";
// import { ERC20Generator_ABI, ERC20Generator_BYTECODE } from "./constants";

// const StateContext = createContext();

// export const StateContextProvider = ({ children }) => {
//   //STATE VARIABLE
//   const [address, setAddress] = useState("");
//   const [getAllERC20TokenListed, setGetAllERC20TokenListed] = useState([]);
//   const [getUserERC20Tokens, setGetUserERC20Tokens] = useState([]);
//   const [getAllDonation, setGetAllDonation] = useState([]);
//   const [fee, setFee] = useState();
//   const [balance, setBalance] = useState();
//   const [mainBalance, setMainBalance] = useState();
//   const [nativeToken, setNativeToken] = useState();

//   const fetchInitialData = async () => {
//     try {
//       //GET USER ACCOUNT
//       const account = await CheckIfWalletConnected();
//       console.log(account);
//       //GET USER BALANCE
//       const balance = await getBalance();
//       setBalance(ethers.utils.formatEther(balance.toString()));
//       setAddress(account);

//       //NATIVE TOKEN
//       const nativeContract = await connectingNativeTokenContract();

//       if (account) {
//         const nativeBalance = await nativeContract.balanceOf(account);
//         const nativeName = await nativeContract.name();
//         const nativeSymbol = await nativeContract.symbol();
//         const nativeDecimals = await nativeContract.decimals();
//         const nativeTotalSupply = await nativeContract.totalSupply();
//         const nativeTotalAddress = await nativeContract.address;
//         const nativeToken = {
//           balance: ethers.utils.formatUnits(nativeBalance.toString(), "ether"),
//           name: nativeName,
//           address: nativeTotalAddress,
//           symbol: nativeSymbol,
//           decimals: nativeDecimals,
//           totalSupply: ethers.utils.formatUnits(
//             nativeTotalSupply.toString(),
//             "ether"
//           ),
//         };
//         setNativeToken(nativeToken);

//         console.log(nativeContract);
//       }

//       //GET CONTRACT
//       const lookUpContract = await connectingWithContract();
//       //GET CONTRACT BALANCE

//       if (account == 0xD080163A90F2a513cBDeAaC76762E44Ae4FC2ac1) {
//         const contractBalance = await lookUpContract.getContractBalance();
//         const mainBal = ethers.utils.formatUnits(
//           contractBalance.toString(),
//           "ether"
//         );

//         console.log(mainBal);
//         setMainBalance(mainBal);
//       }

//       //GET ALL ERC20 TOKEN
//       const getAllERC20TokenListed = 
//       await lookUpContract.getAllERC20TokenListed();
//       //
//       const parsedToken = getAllERC20TokenListed.map((ERC20Token, i) => ({
//         tokenID: ERC20Token.tokenID.toNumber(),
//         owner: ERC20Token.owner,
//         tokenSupply: ERC20Token.tokenSupply,
//         tokenName: ERC20Token.tokenName,
//         tokenSymbol: ERC20Token.tokenSymbol,
//         tokenAddress: ERC20Token.tokenAddress,
//         tokenTransactionHash: ERC20Token.tokenTransactionHash,
//         tokenCreatedDate: ERC20Token.tokenCreatedDate,
//       }));

//       setGetAllERC20TokenListed(parsedToken);
//       //GET USER ERC20 TOKEN
//       if (account) {
//         const getUserERC20Tokens = await lookUpContract.getUserERC20Tokens(
//           account
//         );

//         const parsedUserTokens = getUserERC20Tokens.map((ERC20Token, i) => ({
//           tokenID: ERC20Token.tokenID.toNumber(),
//           owner: ERC20Token.owner,
//           tokenSupply: ERC20Token.tokenSupply,
//           tokenName: ERC20Token.tokenName,
//           tokenSymbol: ERC20Token.tokenSymbol,
//           tokenAddress: ERC20Token.tokenAddress,
//           tokenTransactionHash: ERC20Token.tokenTransactionHash,
//           tokenCreatedDate: ERC20Token.tokenCreatedDate,
//         }));
//         setGetUserERC20Tokens(parsedUserTokens);
//       }
//       //LISTING FEE
//       const listingPrice = await lookUpContract.getERC20TokenListingPrice();
//       const price = ethers.utils.formatEther(listingPrice.toString());
//       setFee(price);
//       //DONATION
//       const getAllDonation = await lookUpContract.getAllDonation();

//       const parsedDonation = getAllDonation.map((donation, i) => ({
//         donationID: donation.donationID.toNumber(),
//         donor: donation.donor,
//         fund: ethers.utils.formatUnits(donation.fund.toString(), "ether"),
//         }));
//       setGetAllDonation(parsedDonation);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchInitialData();
//   }, []);

//   const _deployContract = async (signer, account, name, symbol, supply) => {
//     try {
//       const factory = new ethers.ContractFactory(
//         ERC20Generator_ABI,
//         ERC20Generator_BYTECODE,
//         signer
//       );

//       const totalSupply = Number(supply);
//       const _initialSupply = ethers.utils.parseEther(
//         totalSupply.toString(),
//       "ether"
//       );

//       let contract = await factory.deploy(_initialSupply, name, symbol);

//       const transaction = await contract.deployed();

//       const today = Date.now();
//       let date = new Date(today);
//       const _tokenCreatedDate = date.toLocaleDateString("en-US");

//       if(contract.address) {
//         await _createERC20Token(
//           account,
//           supply.toString(),
//           name,
//           symbol,
//           contract.address,
//           contract.deployTransaction.hash,
//           _tokenCreatedDate
//         );
//       }

//       console.log(contract.address);
//       console.log(contract.deployTransaction.hash);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const _createERC20Token = async (
//     _owner,
//     _tokenSupply,
//     _tokenName,
//     _tokenSymbol,
//     _tokenAddress,
//     _tokenTransactionHash,
//     _tokenCreatedDate,
//   ) => {
//     try {
//       const contract = await connectingWithContract();

//       const listingPrice = await contract.getERC20TokenListingPrice();

//       const transaction = await contract.createERC20Token(
//         _owner,
//         _tokenSupply,
//         _tokenName,
//         _tokenSymbol,
//         _tokenAddress,
//         _tokenTransactionHash,
//         _tokenCreatedDate,
//         {
//           value: listingPrice.toString(),
//         }
//       );

//       await transaction.wait();
//       console.log(transaction);
//       window.location.reload();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const createERC20 = async (token) => {
//     const { name, symbol, supply } = token;

//     console.log(name, symbol, Number(supply));

//     try {
//       if (!name || !symbol || !supply) {
//         console.log(token);
//       } else {
//         console.log(name, symbol, supply);
//         const account = await CheckIfWalletConnected();
//         console.log(account);
//         const web3modal = new Web3Modal();
//         const connection = await web3modal.connect();
//         const provider = new ethers.providers.Web3Provider(connection);
//         const signer = provider.getSigner();
//         _deployContract(signer, account, name, symbol, supply);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const withdrawFund = async () => {
//     try {
//       const contract = await connectingWithContract();
//       const withdraw = await contract.withdraw();

//       await withdraw.wait();
//       console.log(withdraw);
//       window.location.reload();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const donateFund = async () => {
//     try {
//       const donateAmount = ethers.utils.parseEther("1");
//       const contract = await connectingWithContract();
//       const donate = await contract.donate({
//         value: donateAmount.toString(),
//       });

//       await donate.wait();
//       console.log(donate);
//       window.location.reload();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const transferNativeToken = async (token) => {
//     try {
//       const { address, tokenNo } = token;
//       console.log(address, token);
//       const transferAmount = ethers.utils.parseEther(tokenNo);
      
//       const contract = await connectingNativeTokenContract();
//       const transaction = await contract.transfer(address, transferAmount);

//       await transaction.wait();
//       console.log(transaction);
//       window.location.reload();
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <StateContext.Provider
//       value={{
//         createERC20,
//         withdrawFund,
//         donateFund,
//         transferNativeToken,
//         getAllERC20TokenListed,
//         getUserERC20Tokens,
//         getAllDonation,
//         fee,
//         address,
//         balance,
//         mainBalance,
//         nativeToken,
//       }}
//       >
//       {children}
//     </StateContext.Provider>
//   );
// };

// export const useStateContext = () => useContext(StateContext);

// ChatGPT code below :

import React, { useState, useContext, createContext, useEffect } from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";

// INTERNAL IMPORT
import {
  CheckIfWalletConnected,
  ConnectWallet,
  connectingWithContract,
  getBalance,
  connectingNativeTokenContract,
} from "../Utils/index";
import { ERC20Generator_ABI, ERC20Generator_BYTECODE } from "./constants";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  // STATE VARIABLES
  const [address, setAddress] = useState("");
  const [getAllERC20TokenListed, setGetAllERC20TokenListed] = useState([]);
  const [getUserERC20Tokens, setGetUserERC20Tokens] = useState([]);
  const [getAllDonation, setGetAllDonation] = useState([]);
  const [fee, setFee] = useState();
  const [balance, setBalance] = useState();
  const [mainBalance, setMainBalance] = useState();
  const [nativeToken, setNativeToken] = useState();

  const fetchInitialData = async () => {
    try {
      // GET USER ACCOUNT
      const account = await CheckIfWalletConnected();
      console.log(account);
      // GET USER BALANCE
      const userBalance = await getBalance();
      setBalance(ethers.utils.formatEther(userBalance.toString()));
      setAddress(account);

      // NATIVE TOKEN
      const nativeContract = await connectingNativeTokenContract();

      if (account) {
        const nativeBalance = await nativeContract.balanceOf(account);
        const nativeName = await nativeContract.name();
        const nativeSymbol = await nativeContract.symbol();
        const nativeDecimals = await nativeContract.decimals();
        const nativeTotalSupply = await nativeContract.totalSupply();
        const nativeTotalAddress = await nativeContract.address;
        const nativeToken = {
          balance: ethers.utils.formatUnits(nativeBalance.toString(), "ether"),
          name: nativeName,
          address: nativeTotalAddress,
          symbol: nativeSymbol,
          decimals: nativeDecimals,
          totalSupply: ethers.utils.formatUnits(
            nativeTotalSupply.toString(),
            "ether"
          ),
        };
        setNativeToken(nativeToken);

        console.log(nativeContract);
      }

      // GET CONTRACT
      const lookUpContract = await connectingWithContract();
      // GET CONTRACT BALANCE

      if (account == 0xD080163A90F2a513cBDeAaC76762E44Ae4FC2ac1) {
        const contractBalance = await lookUpContract.getContractBalance();
        const mainBal = ethers.utils.formatUnits(
          contractBalance.toString(),
          "ether"
        );

        console.log(mainBal);
        setMainBalance(mainBal);
      }

      // GET ALL ERC20 TOKEN
      const allERC20Tokens = await lookUpContract.getAllERC20TokenListed();
      //
      const parsedToken = allERC20Tokens.map((ERC20Token, i) => ({
        tokenID: ERC20Token.tokenID.toNumber(),
        owner: ERC20Token.owner,
        tokenSupply: ERC20Token.tokenSupply,
        tokenName: ERC20Token.tokenName,
        tokenSymbol: ERC20Token.tokenSymbol,
        tokenAddress: ERC20Token.tokenAddress,
        tokenTransactionHash: ERC20Token.tokenTransactionHash,
        tokenCreatedDate: ERC20Token.tokenCreatedDate,
      }));

      setGetAllERC20TokenListed(parsedToken);
      // GET USER ERC20 TOKEN
      if (account) {
        const userERC20Tokens = await lookUpContract.getUserERC20Tokens(
          account
        );

        const parsedUserTokens = userERC20Tokens.map((ERC20Token, i) => ({
          tokenID: ERC20Token.tokenID.toNumber(),
          owner: ERC20Token.owner,
          tokenSupply: ERC20Token.tokenSupply,
          tokenName: ERC20Token.tokenName,
          tokenSymbol: ERC20Token.tokenSymbol,
          tokenAddress: ERC20Token.tokenAddress,
          tokenTransactionHash: ERC20Token.tokenTransactionHash,
          tokenCreatedDate: ERC20Token.tokenCreatedDate,
        }));
        setGetUserERC20Tokens(parsedUserTokens);
      }
      // LISTING FEE
      const listingPrice = await lookUpContract.getERC20TokenListingPrice();
      const price = ethers.utils.formatEther(listingPrice.toString());
      setFee(price);
      // DONATION
      const allDonations = await lookUpContract.getAllDonation();

      const parsedDonation = allDonations.map((donation, i) => ({
        donationID: donation.donationID.toNumber(),
        donor: donation.donor,
        fund: ethers.utils.formatUnits(donation.fund.toString(), "ether"),
      }));
      setGetAllDonation(parsedDonation);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchInitialData();
  }, []);

  const deployContract = async (signer, account, name, symbol, supply) => {
    try {
      const factory = new ethers.ContractFactory(
        ERC20Generator_ABI,
        ERC20Generator_BYTECODE,
        signer
      );

      const totalSupply = Number(supply);
      const initialSupply = ethers.utils.parseEther(
        totalSupply.toString(),
        "ether"
      );

      let contract = await factory.deploy(initialSupply, name, symbol);

      const transaction = await contract.deployed();

      const today = Date.now();
      let date = new Date(today);
      const tokenCreatedDate = date.toLocaleDateString("en-US");

      if(contract.address) {
        await createERC20Token(
          account,
          supply.toString(),
          name,
          symbol,
          contract.address,
          contract.deployTransaction.hash,
          tokenCreatedDate
        );
      }

      console.log(contract.address);
      console.log(contract.deployTransaction.hash);
    } catch (error) {
      console.log(error);
    }
  };

  const createERC20Token = async (
    owner,
    tokenSupply,
    tokenName,
    tokenSymbol,
    tokenAddress,
    tokenTransactionHash,
    tokenCreatedDate
  ) => {
    try {
      const contract = await connectingWithContract();

      const listingPrice = await contract.getERC20TokenListingPrice();

      const transaction = await contract.createERC20Token(
        owner,
        tokenSupply,
        tokenName,
        tokenSymbol,
        tokenAddress,
        tokenTransactionHash,
        tokenCreatedDate,
        {
          value: listingPrice.toString(),
        }
      );

      await transaction.wait();
      console.log(transaction);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const createERC20 = async (token) => {
    const { name, symbol, supply } = token;

    console.log(name, symbol, Number(supply));

    try {
      if (!name || !symbol || !supply) {
        console.log(token);
      } else {
        console.log(name, symbol, supply);
        const account = await CheckIfWalletConnected();
        console.log(account);
        const web3modal = new Web3Modal();
        const connection = await web3modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        deployContract(signer, account, name, symbol, supply);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const withdrawFund = async () => {
    try {
      const contract = await connectingWithContract();
      const withdraw = await contract.withdraw();

      await withdraw.wait();
      console.log(withdraw);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const donateFund = async () => {
    try {
      const donateAmount = ethers.utils.parseEther("1");
      const contract = await connectingWithContract();
      const donate = await contract.donate({
        value: donateAmount.toString(),
      });

      await donate.wait();
      console.log(donate);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const transferNativeToken = async (token) => {
    try {
      const { address, tokenNo } = token;
      console.log(address, token);
      const transferAmount = ethers.utils.parseEther(tokenNo);
      
      const contract = await connectingNativeTokenContract();
      const transaction = await contract.transfer(address, transferAmount);

      await transaction.wait();
      console.log(transaction);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StateContext.Provider
      value={{
        createERC20,
        withdrawFund,
        donateFund,
        transferNativeToken,
        getAllERC20TokenListed,
        getUserERC20Tokens,
        getAllDonation,
        fee,
        address,
        balance,
        mainBalance,
        nativeToken,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
