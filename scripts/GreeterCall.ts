import { network } from "hardhat";

const GREETER_ADDRESS = "0x5b62eCc181550c6141d64299095369248088e1eC";

const { ethers } = await network.create()
const greeter = await ethers.getContractAt("Greeter", GREETER_ADDRESS);

console.log(await greeter.greet());
