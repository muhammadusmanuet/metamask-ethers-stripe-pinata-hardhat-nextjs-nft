import { ethers } from "ethers";
import { CONTRACT_ADDRESS } from "../constants/app.constants";
import FiredGuys from "../src/artifacts/contracts/MyNFT.sol/FiredGuys.json";

export const connectToMetamask = async () => {
  if (!window.ethereum) {
    alert("Please install MetaMask first.");
    return;
  }
  try {
    await window.ethereum.enable();
  } catch (error) {
    console.error("You need to allow MetaMask.");
    return;
  }
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const accounts = await provider.listAccounts();
  const signer = provider.getSigner();
  const contract = new ethers.Contract(CONTRACT_ADDRESS, FiredGuys.abi, signer);
  const count = await getCount(contract);
  return {
    contract,
    provider,
    signer,
    account: accounts[0],
    mintedCount: count,
  };
};

export const mintToken = async (contract, signer, imgURI) => {
  const connection = contract.connect(signer);
  const addr = connection.address;
  let result;
  try {
    result = await contract.payToMint(addr, imgURI, {
      value: ethers.utils.parseEther("0.05"),
    });
  } catch (error) {
    alert(error.message);
    return;
  }
  await result.wait();
  alert("Token minted successfully");
};

export const getMintedStatus = async (contract, imgURI) => {
  const result = await contract.isContentOwned(imgURI);
  return result;
};

export const getCount = async (contract) => {
  const count = await contract.count();
  return parseInt(count);
};
