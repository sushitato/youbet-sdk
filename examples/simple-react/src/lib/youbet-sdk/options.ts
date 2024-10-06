import { SdkCtorOptions } from "youbet-sdk";
import { Connection } from "@solana/web3.js";

export const lineaTestOptions: SdkCtorOptions = {
  networkOptions: {
    contractAddress: "0x537AEB55b80a2361414318BF3BF8c2b340c212E7",
    rpcUrl: "https://rpc.sepolia.linea.build",
    chainId: 59144,
  },
  chainName: "Linea",
};

export const openCampusTestOptions: SdkCtorOptions = {
  networkOptions: {
    rpcUrl: "https://open-campus-codex-sepolia.drpc.org",
    chainId: 656476,
    contractAddress: "0xd8dcbd828a40f6590a5bee5095c38994dab3bdee",
  },
  chainName: "OpenCampus-Testnet",
};

export const solanaOptions: SdkCtorOptions = {
  chainName: "solana",
  networkOptions: {
    contractAddress: "",
    rpcUrl: "https://api.devnet.solana.com",
    chainId: 0,
  },
  // ts-ignore
  wallet: window.solana,
  connection: new Connection("https://api.devnet.solana.com", {
    commitment: "confirmed",
  }),
};
