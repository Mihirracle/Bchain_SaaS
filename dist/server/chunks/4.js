exports.id = 4;
exports.ids = [4];
exports.modules = {

/***/ 638:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  j: () => (/* binding */ StateContextProvider),
  F: () => (/* binding */ useStateContext)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "ethers"
var external_ethers_ = __webpack_require__(982);
// EXTERNAL MODULE: external "web3modal"
var external_web3modal_ = __webpack_require__(840);
var external_web3modal_default = /*#__PURE__*/__webpack_require__.n(external_web3modal_);
;// CONCATENATED MODULE: ./Context/ERC20Generator.json
const ERC20Generator_namespaceObject = JSON.parse('{"Mt":[{"inputs":[{"internalType":"uint256","name":"initialSupply","type":"uint256"},{"internalType":"string","name":"_tokenName","type":"string"},{"internalType":"string","name":"_tokenSymbol","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}],"eF":"0x60806040523480156200001157600080fd5b506040516200184b3803806200184b833981810160405281019062000037919062000339565b818181600390805190602001906200005192919062000200565b5080600490805190602001906200006a92919062000200565b5050506200007f33846200008860201b60201c565b50505062000645565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415620000fb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000f29062000414565b60405180910390fd5b6200010f60008383620001f660201b60201c565b8060026000828254620001239190620004cb565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051620001d6919062000436565b60405180910390a3620001f260008383620001fb60201b60201c565b5050565b505050565b505050565b8280546200020e9062000568565b90600052602060002090601f0160209004810192826200023257600085556200027e565b82601f106200024d57805160ff19168380011785556200027e565b828001600101855582156200027e579182015b828111156200027d57825182559160200191906001019062000260565b5b5090506200028d919062000291565b5090565b5b80821115620002ac57600081600090555060010162000292565b5090565b6000620002c7620002c18462000487565b62000453565b905082815260208101848484011115620002e057600080fd5b620002ed84828562000532565b509392505050565b600082601f8301126200030757600080fd5b815162000319848260208601620002b0565b91505092915050565b60008151905062000333816200062b565b92915050565b6000806000606084860312156200034f57600080fd5b60006200035f8682870162000322565b935050602084015167ffffffffffffffff8111156200037d57600080fd5b6200038b86828701620002f5565b925050604084015167ffffffffffffffff811115620003a957600080fd5b620003b786828701620002f5565b9150509250925092565b6000620003d0601f83620004ba565b91507f45524332303a206d696e7420746f20746865207a65726f2061646472657373006000830152602082019050919050565b6200040e8162000528565b82525050565b600060208201905081810360008301526200042f81620003c1565b9050919050565b60006020820190506200044d600083018462000403565b92915050565b6000604051905081810181811067ffffffffffffffff821117156200047d576200047c620005fc565b5b8060405250919050565b600067ffffffffffffffff821115620004a557620004a4620005fc565b5b601f19601f8301169050602081019050919050565b600082825260208201905092915050565b6000620004d88262000528565b9150620004e58362000528565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156200051d576200051c6200059e565b5b828201905092915050565b6000819050919050565b60005b838110156200055257808201518184015260208101905062000535565b8381111562000562576000848401525b50505050565b600060028204905060018216806200058157607f821691505b60208210811415620005985762000597620005cd565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620006368162000528565b81146200064257600080fd5b50565b6111f680620006556000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80633950935111610071578063395093511461016857806370a082311461019857806395d89b41146101c8578063a457c2d7146101e6578063a9059cbb14610216578063dd62ed3e14610246576100a9565b806306fdde03146100ae578063095ea7b3146100cc57806318160ddd146100fc57806323b872dd1461011a578063313ce5671461014a575b600080fd5b6100b6610276565b6040516100c39190610ebf565b60405180910390f35b6100e660048036038101906100e19190610b5e565b610308565b6040516100f39190610ea4565b60405180910390f35b61010461032b565b6040516101119190610fc1565b60405180910390f35b610134600480360381019061012f9190610b0f565b610335565b6040516101419190610ea4565b60405180910390f35b610152610364565b60405161015f9190610fdc565b60405180910390f35b610182600480360381019061017d9190610b5e565b61036d565b60405161018f9190610ea4565b60405180910390f35b6101b260048036038101906101ad9190610aaa565b6103a4565b6040516101bf9190610fc1565b60405180910390f35b6101d06103ec565b6040516101dd9190610ebf565b60405180910390f35b61020060048036038101906101fb9190610b5e565b61047e565b60405161020d9190610ea4565b60405180910390f35b610230600480360381019061022b9190610b5e565b6104f5565b60405161023d9190610ea4565b60405180910390f35b610260600480360381019061025b9190610ad3565b610518565b60405161026d9190610fc1565b60405180910390f35b606060038054610285906110f1565b80601f01602080910402602001604051908101604052809291908181526020018280546102b1906110f1565b80156102fe5780601f106102d3576101008083540402835291602001916102fe565b820191906000526020600020905b8154815290600101906020018083116102e157829003601f168201915b5050505050905090565b60008061031361059f565b90506103208185856105a7565b600191505092915050565b6000600254905090565b60008061034061059f565b905061034d858285610772565b6103588585856107fe565b60019150509392505050565b60006012905090565b60008061037861059f565b905061039981858561038a8589610518565b6103949190611013565b6105a7565b600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060600480546103fb906110f1565b80601f0160208091040260200160405190810160405280929190818152602001828054610427906110f1565b80156104745780601f1061044957610100808354040283529160200191610474565b820191906000526020600020905b81548152906001019060200180831161045757829003601f168201915b5050505050905090565b60008061048961059f565b905060006104978286610518565b9050838110156104dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104d390610fa1565b60405180910390fd5b6104e982868684036105a7565b60019250505092915050565b60008061050061059f565b905061050d8185856107fe565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610617576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060e90610f81565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610687576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161067e90610f01565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516107659190610fc1565b60405180910390a3505050565b600061077e8484610518565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146107f857818110156107ea576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107e190610f21565b60405180910390fd5b6107f784848484036105a7565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561086e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161086590610f61565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156108de576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108d590610ee1565b60405180910390fd5b6108e9838383610a76565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508181101561096f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161096690610f41565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610a5d9190610fc1565b60405180910390a3610a70848484610a7b565b50505050565b505050565b505050565b600081359050610a8f81611192565b92915050565b600081359050610aa4816111a9565b92915050565b600060208284031215610abc57600080fd5b6000610aca84828501610a80565b91505092915050565b60008060408385031215610ae657600080fd5b6000610af485828601610a80565b9250506020610b0585828601610a80565b9150509250929050565b600080600060608486031215610b2457600080fd5b6000610b3286828701610a80565b9350506020610b4386828701610a80565b9250506040610b5486828701610a95565b9150509250925092565b60008060408385031215610b7157600080fd5b6000610b7f85828601610a80565b9250506020610b9085828601610a95565b9150509250929050565b610ba38161107b565b82525050565b6000610bb482610ff7565b610bbe8185611002565b9350610bce8185602086016110be565b610bd781611181565b840191505092915050565b6000610bef602383611002565b91507f45524332303a207472616e7366657220746f20746865207a65726f206164647260008301527f65737300000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000610c55602283611002565b91507f45524332303a20617070726f766520746f20746865207a65726f20616464726560008301527f73730000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000610cbb601d83611002565b91507f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006000830152602082019050919050565b6000610cfb602683611002565b91507f45524332303a207472616e7366657220616d6f756e742065786365656473206260008301527f616c616e636500000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000610d61602583611002565b91507f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008301527f64726573730000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000610dc7602483611002565b91507f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008301527f72657373000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000610e2d602583611002565b91507f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008301527f207a65726f0000000000000000000000000000000000000000000000000000006020830152604082019050919050565b610e8f816110a7565b82525050565b610e9e816110b1565b82525050565b6000602082019050610eb96000830184610b9a565b92915050565b60006020820190508181036000830152610ed98184610ba9565b905092915050565b60006020820190508181036000830152610efa81610be2565b9050919050565b60006020820190508181036000830152610f1a81610c48565b9050919050565b60006020820190508181036000830152610f3a81610cae565b9050919050565b60006020820190508181036000830152610f5a81610cee565b9050919050565b60006020820190508181036000830152610f7a81610d54565b9050919050565b60006020820190508181036000830152610f9a81610dba565b9050919050565b60006020820190508181036000830152610fba81610e20565b9050919050565b6000602082019050610fd66000830184610e86565b92915050565b6000602082019050610ff16000830184610e95565b92915050565b600081519050919050565b600082825260208201905092915050565b600061101e826110a7565b9150611029836110a7565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561105e5761105d611123565b5b828201905092915050565b600061107482611087565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b838110156110dc5780820151818401526020810190506110c1565b838111156110eb576000848401525b50505050565b6000600282049050600182168061110957607f821691505b6020821081141561111d5761111c611152565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b61119b81611069565b81146111a657600080fd5b50565b6111b2816110a7565b81146111bd57600080fd5b5056fea26469706673582212201e498e3352c2b93d0bc5e0605ae18db53e141281220fed4fdabfd3d46e53c00764736f6c63430008000033"}');
;// CONCATENATED MODULE: ./Context/LookUpContract.json
const LookUpContract_namespaceObject = JSON.parse('{"Mt":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"donor","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"DonationReceived","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"string","name":"token","type":"string"}],"name":"ERC20TokenListed","type":"event"},{"inputs":[],"name":"_donationIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_tokenIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"string","name":"_tokenSupply","type":"string"},{"internalType":"string","name":"_tokenName","type":"string"},{"internalType":"string","name":"_tokenSymbol","type":"string"},{"internalType":"string","name":"_tokenAddress","type":"string"},{"internalType":"string","name":"_tokenTransactionHash","type":"string"},{"internalType":"string","name":"_tokenCreatedDate","type":"string"}],"name":"createERC20Token","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"donate","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"getAllDonation","outputs":[{"components":[{"internalType":"uint256","name":"donationID","type":"uint256"},{"internalType":"address","name":"donor","type":"address"},{"internalType":"uint256","name":"fund","type":"uint256"}],"internalType":"struct LookUpContract.Donation[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllERC20TokenListed","outputs":[{"components":[{"internalType":"uint256","name":"tokenID","type":"uint256"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"string","name":"tokenSupply","type":"string"},{"internalType":"string","name":"tokenName","type":"string"},{"internalType":"string","name":"tokenSymbol","type":"string"},{"internalType":"string","name":"tokenAddress","type":"string"},{"internalType":"string","name":"tokenTransactionHash","type":"string"},{"internalType":"string","name":"tokenCreatedDate","type":"string"}],"internalType":"struct LookUpContract.ERC20Token[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getContractBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenID","type":"uint256"}],"name":"getERC20Token","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getERC20TokenListingPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getUserERC20Tokens","outputs":[{"components":[{"internalType":"uint256","name":"tokenID","type":"uint256"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"string","name":"tokenSupply","type":"string"},{"internalType":"string","name":"tokenName","type":"string"},{"internalType":"string","name":"tokenSymbol","type":"string"},{"internalType":"string","name":"tokenAddress","type":"string"},{"internalType":"string","name":"tokenTransactionHash","type":"string"},{"internalType":"string","name":"tokenCreatedDate","type":"string"}],"internalType":"struct LookUpContract.ERC20Token[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"listingPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_listingPrice","type":"uint256"},{"internalType":"address","name":"_owner","type":"address"}],"name":"updateListingPrice","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]}');
;// CONCATENATED MODULE: ./Context/constants.js


const ERC20Generator_ABI = ERC20Generator_namespaceObject.Mt;
const ERC20Generator_BYTECODE = ERC20Generator_namespaceObject.eF;
const ERC20Generator_ADDRESS = "0xBea7D3EC634cBB3016Db6Fa632531938c1Ba5b87";
// export const ERC20Generator_ADDRESS = "0xDE38dE46e5A0B6772F144e810DA5d57697ae75fc";  Deployed on Remix IDE
const LookUpContract_ABI = LookUpContract_namespaceObject.Mt;
const LookUpContract_ADDRESS = "0xb98A9aEc8BF031e6F63e6E1Ee35B4FB0DA0049c1"; // export const LookUpContract_ADDRESS = "0xbA8dC2e4B4Ff3e01a8460bF02f365629bcf4b20d";   Deployed on Remix IDE

;// CONCATENATED MODULE: ./Utils/index.js
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



const web3Modal =  false ? 0 : null;
const CheckIfWalletConnected = async ()=>{
    try {
        if (!window.ethereum) {
            return console.log("Install Metamask :(");
        }
        const accounts = await window.ethereum.request({
            method: "eth_accounts"
        });
        const firstAccount = accounts[0];
        return firstAccount;
    } catch (error) {
        console.error(error);
    }
};
const ConnectWallet = async ()=>{
    try {
        if (!window.ethereum) {
            return console.log("Install Metamask :(");
        }
        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts"
        });
        const firstAccount = accounts[0];
        return firstAccount;
    } catch (error) {
        console.error(error);
    }
};
const fetchContract = (signerOrProvider)=>new external_ethers_.ethers.Contract(LookUpContract_ADDRESS, LookUpContract_ABI, signerOrProvider);
const connectingWithContract = async ()=>{
    try {
        const connection = await web3Modal.connect();
        const provider = new external_ethers_.ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = fetchContract(signer);
        return contract;
    } catch (error) {
        console.log(error);
    }
};
const getBalance = async ()=>{
    try {
        const connection = await web3Modal.connect();
        const provider = new external_ethers_.ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        return await signer.getBalance();
    } catch (error) {
        console.log(error);
    }
};
const fetchTokenContract = (signerOrProvider)=>new external_ethers_.ethers.Contract(ERC20Generator_ADDRESS, ERC20Generator_ABI, signerOrProvider);
const connectingNativeTokenContract = async ()=>{
    try {
        const connection = await web3Modal.connect();
        const provider = new external_ethers_.ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = fetchTokenContract(signer);
        return contract;
    } catch (error) {
        console.log(error);
    }
};

;// CONCATENATED MODULE: ./Context/index.js
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




// INTERNAL IMPORT


const StateContext = /*#__PURE__*/ (0,external_react_.createContext)();
const StateContextProvider = ({ children })=>{
    // STATE VARIABLES
    const [address, setAddress] = (0,external_react_.useState)("");
    const [getAllERC20TokenListed, setGetAllERC20TokenListed] = (0,external_react_.useState)([]);
    const [getUserERC20Tokens, setGetUserERC20Tokens] = (0,external_react_.useState)([]);
    const [getAllDonation, setGetAllDonation] = (0,external_react_.useState)([]);
    const [fee, setFee] = (0,external_react_.useState)();
    const [balance, setBalance] = (0,external_react_.useState)();
    const [mainBalance, setMainBalance] = (0,external_react_.useState)();
    const [nativeToken, setNativeToken] = (0,external_react_.useState)();
    const fetchInitialData = async ()=>{
        try {
            // GET USER ACCOUNT
            const account = await CheckIfWalletConnected();
            console.log(account);
            // GET USER BALANCE
            const userBalance = await getBalance();
            setBalance(external_ethers_.ethers.utils.formatEther(userBalance.toString()));
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
                    balance: external_ethers_.ethers.utils.formatUnits(nativeBalance.toString(), "ether"),
                    name: nativeName,
                    address: nativeTotalAddress,
                    symbol: nativeSymbol,
                    decimals: nativeDecimals,
                    totalSupply: external_ethers_.ethers.utils.formatUnits(nativeTotalSupply.toString(), "ether")
                };
                setNativeToken(nativeToken);
                console.log(nativeContract);
            }
            // GET CONTRACT
            const lookUpContract = await connectingWithContract();
            // GET CONTRACT BALANCE
            if (account == 0xD080163A90F2a513cBDeAaC76762E44Ae4FC2ac1) {
                const contractBalance = await lookUpContract.getContractBalance();
                const mainBal = external_ethers_.ethers.utils.formatUnits(contractBalance.toString(), "ether");
                console.log(mainBal);
                setMainBalance(mainBal);
            }
            // GET ALL ERC20 TOKEN
            const allERC20Tokens = await lookUpContract.getAllERC20TokenListed();
            //
            const parsedToken = allERC20Tokens.map((ERC20Token, i)=>({
                    tokenID: ERC20Token.tokenID.toNumber(),
                    owner: ERC20Token.owner,
                    tokenSupply: ERC20Token.tokenSupply,
                    tokenName: ERC20Token.tokenName,
                    tokenSymbol: ERC20Token.tokenSymbol,
                    tokenAddress: ERC20Token.tokenAddress,
                    tokenTransactionHash: ERC20Token.tokenTransactionHash,
                    tokenCreatedDate: ERC20Token.tokenCreatedDate
                }));
            setGetAllERC20TokenListed(parsedToken);
            // GET USER ERC20 TOKEN
            if (account) {
                const userERC20Tokens = await lookUpContract.getUserERC20Tokens(account);
                const parsedUserTokens = userERC20Tokens.map((ERC20Token, i)=>({
                        tokenID: ERC20Token.tokenID.toNumber(),
                        owner: ERC20Token.owner,
                        tokenSupply: ERC20Token.tokenSupply,
                        tokenName: ERC20Token.tokenName,
                        tokenSymbol: ERC20Token.tokenSymbol,
                        tokenAddress: ERC20Token.tokenAddress,
                        tokenTransactionHash: ERC20Token.tokenTransactionHash,
                        tokenCreatedDate: ERC20Token.tokenCreatedDate
                    }));
                setGetUserERC20Tokens(parsedUserTokens);
            }
            // LISTING FEE
            const listingPrice = await lookUpContract.getERC20TokenListingPrice();
            const price = external_ethers_.ethers.utils.formatEther(listingPrice.toString());
            setFee(price);
            // DONATION
            const allDonations = await lookUpContract.getAllDonation();
            const parsedDonation = allDonations.map((donation, i)=>({
                    donationID: donation.donationID.toNumber(),
                    donor: donation.donor,
                    fund: external_ethers_.ethers.utils.formatUnits(donation.fund.toString(), "ether")
                }));
            setGetAllDonation(parsedDonation);
        } catch (error) {
            console.log(error);
        }
    };
    (0,external_react_.useEffect)(()=>{
        fetchInitialData();
    }, []);
    const deployContract = async (signer, account, name, symbol, supply)=>{
        try {
            const factory = new external_ethers_.ethers.ContractFactory(ERC20Generator_ABI, ERC20Generator_BYTECODE, signer);
            const totalSupply = Number(supply);
            const initialSupply = external_ethers_.ethers.utils.parseEther(totalSupply.toString(), "ether");
            let contract = await factory.deploy(initialSupply, name, symbol);
            const transaction = await contract.deployed();
            const today = Date.now();
            let date = new Date(today);
            const tokenCreatedDate = date.toLocaleDateString("en-US");
            if (contract.address) {
                await createERC20Token(account, supply.toString(), name, symbol, contract.address, contract.deployTransaction.hash, tokenCreatedDate);
            }
            console.log(contract.address);
            console.log(contract.deployTransaction.hash);
        } catch (error) {
            console.log(error);
        }
    };
    const createERC20Token = async (owner, tokenSupply, tokenName, tokenSymbol, tokenAddress, tokenTransactionHash, tokenCreatedDate)=>{
        try {
            const contract = await connectingWithContract();
            const listingPrice = await contract.getERC20TokenListingPrice();
            const transaction = await contract.createERC20Token(owner, tokenSupply, tokenName, tokenSymbol, tokenAddress, tokenTransactionHash, tokenCreatedDate, {
                value: listingPrice.toString()
            });
            await transaction.wait();
            console.log(transaction);
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    };
    const createERC20 = async (token)=>{
        const { name, symbol, supply } = token;
        console.log(name, symbol, Number(supply));
        try {
            if (!name || !symbol || !supply) {
                console.log(token);
            } else {
                console.log(name, symbol, supply);
                const account = await CheckIfWalletConnected();
                console.log(account);
                const web3modal = new (external_web3modal_default())();
                const connection = await web3modal.connect();
                const provider = new external_ethers_.ethers.providers.Web3Provider(connection);
                const signer = provider.getSigner();
                deployContract(signer, account, name, symbol, supply);
            }
        } catch (error) {
            console.log(error);
        }
    };
    const withdrawFund = async ()=>{
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
    const donateFund = async ()=>{
        try {
            const donateAmount = external_ethers_.ethers.utils.parseEther("1");
            const contract = await connectingWithContract();
            const donate = await contract.donate({
                value: donateAmount.toString()
            });
            await donate.wait();
            console.log(donate);
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    };
    const transferNativeToken = async (token)=>{
        try {
            const { address, tokenNo } = token;
            console.log(address, token);
            const transferAmount = external_ethers_.ethers.utils.parseEther(tokenNo);
            const contract = await connectingNativeTokenContract();
            const transaction = await contract.transfer(address, transferAmount);
            await transaction.wait();
            console.log(transaction);
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    };
    return /*#__PURE__*/ jsx_runtime.jsx(StateContext.Provider, {
        value: {
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
            nativeToken
        },
        children: children
    });
};
const useStateContext = ()=>(0,external_react_.useContext)(StateContext);


/***/ }),

/***/ 4:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(893);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(764);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Context_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(638);
// import Head from "next/head";
// import "../styles/globals.css";
// import { StateContextProvider } from "../Context";
// export default function App({ Component, pageProps }) {
//   return (
//     <>
//       <StateContextProvider>
//         <Component  {...pageProps} />
//       </StateContextProvider>
//       <script src="js/vendor/modernizr-3.5.0.min.js"></script>
//       <script src="js/vendor/jquery-1.12.4.min.js"></script>
//       <script src="js/bootstrap.min.js"></script>
//       <script src="js/owl.carousal.min.js"></script>
//       <script src="js/popper.min.js"></script>
//       <script src="js/jquery.nice-select.min.js"></script>
//       <script src="js/jquery.meanmenu.js"></script>
//       <script src="js/wow.min.js"></script>
//       <script src="js/plugins.js"></script>
//       <script src="js/main.js"></script>
//     </>
//   );
// }




function App({ Component, pageProps }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Context_index__WEBPACK_IMPORTED_MODULE_3__/* .StateContextProvider */ .j, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                    ...pageProps
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                src: "js/vendor/modernizr-3.5.0.min.js"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                src: "js/vendor/jquery-1.12.4.min.js"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                src: "js/bootstrap.min.js"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                src: "js/owl.carousel.min.js"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                src: "js/popper.min.js"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                src: "js/jquery.nice-select.min.js"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                src: "js/jquery.meanmenu.js"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                src: "js/wow.min.js"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                src: "js/plugins.js"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                src: "js/main.js"
            })
        ]
    });
}


/***/ }),

/***/ 764:
/***/ (() => {



/***/ })

};
;